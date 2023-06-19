import type { RouterContextValue, RouterPathPattern, RouterPathName } from '@rocket.chat/ui-contexts';
import { RouterContext } from '@rocket.chat/ui-contexts';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tracker } from 'meteor/tracker';
import type { FC } from 'react';
import React from 'react';

import { createSubscription } from '../lib/createSubscription';

const getRoutePath = (
	patternOrName: RouterPathPattern | RouterPathName,
	parameters?: Record<string, string>,
	search?: Record<string, string>,
): string => Tracker.nonreactive(() => FlowRouter.path(patternOrName, parameters, search));

export const navigate = (
	toOrDelta:
		| string
		| {
				pathname?: string;
				search?: string;
				hash?: string;
		  }
		| {
				pathname: string;
				search?: Record<string, string>;
				hash?: undefined;
		  }
		| {
				pattern: string;
				params: Record<string, string>;
				search?: Record<string, string>;
		  }
		| number,
	options?: {
		replace?: boolean;
	},
) => {
	if (typeof toOrDelta === 'number') {
		window.history.go(toOrDelta);
		return;
	}

	if (typeof toOrDelta === 'string') {
		navigate({ pathname: toOrDelta }, options);
		return;
	}

	if ('pattern' in toOrDelta) {
		const { pattern, params, search } = toOrDelta;
		const { replace } = options || {};
		const fn = () => FlowRouter.go(pattern, params, search);

		if (replace) {
			FlowRouter.withReplaceState(fn);
		} else {
			fn();
		}

		return;
	}

	if ('pathname' in toOrDelta && toOrDelta.pathname !== undefined && typeof toOrDelta.search === 'object') {
		const { pathname, search } = toOrDelta;
		const { replace } = options || {};
		const fn = () => FlowRouter.go(pathname, undefined, search);

		if (replace) {
			FlowRouter.withReplaceState(fn);
		} else {
			fn();
		}

		return;
	}

	const { pathname = FlowRouter.current().path, search = '', hash = '' } = toOrDelta;
	const { replace } = options || {};

	const fn = () => {
		FlowRouter.go(pathname + search + hash);
	};

	if (replace) {
		FlowRouter.withReplaceState(fn);
		return;
	}

	fn();
};

const subscribers = new Set<() => void>();

const listenToRouteChange = (): void => {
	FlowRouter.watchPathChange();
	subscribers.forEach((onRouteChange) => onRouteChange());
};

let computation: Tracker.Computation | undefined;

queueMicrotask(() => {
	computation = Tracker.autorun(listenToRouteChange);
});

const subscribeToRouteChange = (onRouteChange: () => void): (() => void) => {
	subscribers.add(onRouteChange);
	return () => {
		subscribers.delete(onRouteChange);

		if (subscribers.size === 0) {
			queueMicrotask(() => computation?.stop());
		}
	};
};

const getSearchParameters = () => FlowRouter.current().queryParams;

const setSearchParameters = (
	paramsOrFn: Record<string, string | undefined | null> | ((prev: Record<string, string>) => Record<string, string>),
): void => {
	if (typeof paramsOrFn === 'function') {
		const prevParams = FlowRouter.current().queryParams;
		const emptyParams = Object.fromEntries(Object.entries(prevParams).map(([key]) => [key, null]));
		const newParams = paramsOrFn(prevParams);
		FlowRouter.setQueryParams({ ...emptyParams, ...newParams });
		return;
	}

	FlowRouter.setQueryParams(paramsOrFn);
};

const queryRoutePath = (
	name: Parameters<RouterContextValue['queryRoutePath']>[0],
	parameters: Parameters<RouterContextValue['queryRoutePath']>[1],
	queryStringParameters: Parameters<RouterContextValue['queryRoutePath']>[2],
): ReturnType<RouterContextValue['queryRoutePath']> => createSubscription(() => FlowRouter.path(name, parameters, queryStringParameters));

const queryRouteUrl = (
	name: Parameters<RouterContextValue['queryRouteUrl']>[0],
	parameters: Parameters<RouterContextValue['queryRouteUrl']>[1],
	queryStringParameters: Parameters<RouterContextValue['queryRouteUrl']>[2],
): ReturnType<RouterContextValue['queryRouteUrl']> => createSubscription(() => FlowRouter.url(name, parameters, queryStringParameters));

const pushRoute = (
	name: Parameters<RouterContextValue['pushRoute']>[0],
	parameters: Parameters<RouterContextValue['pushRoute']>[1],
	queryStringParameters?: ((prev: Record<string, string>) => Record<string, string>) | Record<string, string>,
): ReturnType<RouterContextValue['pushRoute']> => {
	const queryParams =
		typeof queryStringParameters === 'function' ? queryStringParameters(FlowRouter.current().queryParams) : queryStringParameters;
	navigate({
		pattern: name,
		params: parameters ?? {},
		search: queryParams,
	});
};

const replaceRoute = (
	name: Parameters<RouterContextValue['replaceRoute']>[0],
	parameters: Parameters<RouterContextValue['replaceRoute']>[1],
	queryStringParameters?: ((prev: Record<string, string>) => Record<string, string>) | Record<string, string>,
): ReturnType<RouterContextValue['replaceRoute']> => {
	const queryParams =
		typeof queryStringParameters === 'function' ? queryStringParameters(FlowRouter.current().queryParams) : queryStringParameters;
	navigate(
		{
			pattern: name,
			params: parameters ?? {},
			search: queryParams,
		},
		{ replace: true },
	);
};

const queryRouteParameter = (name: string) => createSubscription(() => FlowRouter.getParam(name));

const queryCurrentRoute = (): ReturnType<RouterContextValue['queryCurrentRoute']> =>
	createSubscription(() => {
		FlowRouter.watchPathChange();
		const { route, params, queryParams } = FlowRouter.current();
		return [route?.name, params, queryParams, route?.group?.name];
	});

const contextValue = {
	getRoutePath,
	navigate,
	subscribeToRouteChange,
	getSearchParameters,
	setSearchParameters,
	queryRoutePath,
	queryRouteUrl,
	pushRoute,
	replaceRoute,
	queryRouteParameter,
	queryCurrentRoute,
};

const RouterProvider: FC = ({ children }) => <RouterContext.Provider children={children} value={contextValue} />;

export default RouterProvider;
