import type { IHttp, IHttpExtend, IHttpRequest, IHttpResponse, IHttpRetryConfig } from '../../definition/accessors';
import { HttpStatusCode, RequestMethod } from '../../definition/accessors';
import type { AppBridges } from '../bridges/AppBridges';
import type { AppAccessorManager } from '../managers/AppAccessorManager';

export class Http implements IHttp {
    private static readonly DEFAULT_RETRY_CONFIG: IHttpRetryConfig = {
        enabled: false,
        maxAttempts: 3,
        initialDelay: 1000,
        statusCodesToRetry: [
            HttpStatusCode.SERVICE_UNAVAILABLE,
            HttpStatusCode.INTERNAL_SERVER_ERROR,
            HttpStatusCode.TOO_MANY_REQUESTS,
            HttpStatusCode.GATEWAY_TIMEOUT,
            HttpStatusCode.BAD_GATEWAY
        ],
    };

    constructor(
        private readonly accessManager: AppAccessorManager,
        private readonly bridges: AppBridges,
        private readonly httpExtender: IHttpExtend,
        private readonly appId: string,
    ) {}

    public get(url: string, options?: IHttpRequest): Promise<IHttpResponse> {
        return this._processHandler(url, RequestMethod.GET, options);
    }

    public put(url: string, options?: IHttpRequest): Promise<IHttpResponse> {
        return this._processHandler(url, RequestMethod.PUT, options);
    }

    public post(url: string, options?: IHttpRequest): Promise<IHttpResponse> {
        return this._processHandler(url, RequestMethod.POST, options);
    }

    public del(url: string, options?: IHttpRequest): Promise<IHttpResponse> {
        return this._processHandler(url, RequestMethod.DELETE, options);
    }

    public patch(url: string, options?: IHttpRequest): Promise<IHttpResponse> {
        return this._processHandler(url, RequestMethod.PATCH, options);
    }

    private async _processHandler(
        url: string,
        method: RequestMethod,
        options?: IHttpRequest
    ): Promise<IHttpResponse> {
        const retryConfig = {
            ...Http.DEFAULT_RETRY_CONFIG,
            ...options?.retry
        };

        let attempt = 0;
        let error: any;

        let request = options || {};

        if (typeof request.headers === 'undefined') {
            request.headers = {};
        }

        this.httpExtender.getDefaultHeaders().forEach((value: string, key: string) => {
            if (typeof request.headers[key] !== 'string') {
                request.headers[key] = value;
            }
        });

        if (typeof request.params === 'undefined') {
            request.params = {};
        }

        this.httpExtender.getDefaultParams().forEach((value: string, key: string) => {
            if (typeof request.params[key] !== 'string') {
                request.params[key] = value;
            }
        });

        const reader = this.accessManager.getReader(this.appId);
        const persis = this.accessManager.getPersistence(this.appId);

        for (const handler of this.httpExtender.getPreRequestHandlers()) {
            request = await handler.executePreHttpRequest(url, request, reader, persis);
        }

        while (attempt < retryConfig.maxAttempts) {
            try {
                let response = await this.bridges.getHttpBridge().doCall({
                    appId: this.appId,
                    method,
                    url,
                    request,
                });

                if (retryConfig.enabled && 
                    retryConfig.statusCodesToRetry?.includes(response.statusCode) &&
                    attempt < retryConfig.maxAttempts - 1) {
                    attempt++;
                    const delay = retryConfig.initialDelay * Math.pow(2, attempt);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }

                for (const handler of this.httpExtender.getPreResponseHandlers()) {
                    response = await handler.executePreHttpResponse(response, reader, persis);
                }

                return response;

            } catch (err) {
                error = err;
                if (!retryConfig.enabled || attempt === retryConfig.maxAttempts - 1) {
                    throw error;
                }

                attempt++;
                const delay = retryConfig.initialDelay * Math.pow(2, attempt);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        throw error;
    }
}
