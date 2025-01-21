import { API } from './api';

const openApi = new API.ApiClass({
	version: 'json',
	useDefaultAuth: false,
	prettyJson: false,
	enableCors: false,
	auth: API.getUserAuth(),
});

openApi.addRoute('/', {
	get() {
		return {
			openapi: '3.0.3',
			paths: Object.fromEntries(
				Object.entries(API.v1.typedRoutes).map(([path, endpoints]) => {
					return [path, endpoints];
				}),
			),
		};
	},
});
