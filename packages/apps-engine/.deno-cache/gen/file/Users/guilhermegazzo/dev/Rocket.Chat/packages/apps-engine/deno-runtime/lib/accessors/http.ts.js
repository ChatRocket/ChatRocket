import { AppObjectRegistry } from "../../AppObjectRegistry.ts";
export class Http {
  httpExtender;
  read;
  persistence;
  senderFn;
  constructor(read, persistence, httpExtender, senderFn){
    this.read = read;
    this.persistence = persistence;
    this.httpExtender = httpExtender;
    this.senderFn = senderFn;
  // this.httpExtender = new HttpExtend();
  }
  get(url, options) {
    return this._processHandler(url, 'get', options);
  }
  put(url, options) {
    return this._processHandler(url, 'put', options);
  }
  post(url, options) {
    return this._processHandler(url, 'post', options);
  }
  del(url, options) {
    return this._processHandler(url, 'delete', options);
  }
  patch(url, options) {
    return this._processHandler(url, 'patch', options);
  }
  async _processHandler(url, method, options) {
    let request = options || {};
    if (typeof request.headers === 'undefined') {
      request.headers = {};
    }
    this.httpExtender.getDefaultHeaders().forEach((value, key)=>{
      if (typeof request.headers?.[key] !== 'string') {
        request.headers[key] = value;
      }
    });
    if (typeof request.params === 'undefined') {
      request.params = {};
    }
    this.httpExtender.getDefaultParams().forEach((value, key)=>{
      if (typeof request.params?.[key] !== 'string') {
        request.params[key] = value;
      }
    });
    for (const handler of this.httpExtender.getPreRequestHandlers()){
      request = await handler.executePreHttpRequest(url, request, this.read, this.persistence);
    }
    let { result: response } = await this.senderFn({
      method: `bridges:getHttpBridge:doCall`,
      params: [
        {
          appId: AppObjectRegistry.get('id'),
          method,
          url,
          request
        }
      ]
    });
    for (const handler of this.httpExtender.getPreResponseHandlers()){
      response = await handler.executePreHttpResponse(response, this.read, this.persistence);
    }
    return response;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZ3VpbGhlcm1lZ2F6em8vZGV2L1JvY2tldC5DaGF0L3BhY2thZ2VzL2FwcHMtZW5naW5lL2Rlbm8tcnVudGltZS9saWIvYWNjZXNzb3JzL2h0dHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICAgIElIdHRwLFxuICAgIElIdHRwRXh0ZW5kLFxuICAgIElIdHRwUmVxdWVzdCxcbiAgICBJSHR0cFJlc3BvbnNlLFxufSBmcm9tIFwiQHJvY2tldC5jaGF0L2FwcHMtZW5naW5lL2RlZmluaXRpb24vYWNjZXNzb3JzL0lIdHRwLnRzXCI7XG5pbXBvcnQgdHlwZSB7IElQZXJzaXN0ZW5jZSB9IGZyb20gXCJAcm9ja2V0LmNoYXQvYXBwcy1lbmdpbmUvZGVmaW5pdGlvbi9hY2Nlc3NvcnMvSVBlcnNpc3RlbmNlLnRzXCI7XG5pbXBvcnQgdHlwZSB7IElSZWFkIH0gZnJvbSBcIkByb2NrZXQuY2hhdC9hcHBzLWVuZ2luZS9kZWZpbml0aW9uL2FjY2Vzc29ycy9JUmVhZC50c1wiO1xuXG5pbXBvcnQgKiBhcyBNZXNzZW5nZXIgZnJvbSAnLi4vbWVzc2VuZ2VyLnRzJztcbmltcG9ydCB7IEFwcE9iamVjdFJlZ2lzdHJ5IH0gZnJvbSBcIi4uLy4uL0FwcE9iamVjdFJlZ2lzdHJ5LnRzXCI7XG5cbnR5cGUgUmVxdWVzdE1ldGhvZCA9ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAnaGVhZCcgfCAnZGVsZXRlJyB8ICdwYXRjaCc7XG5cbmV4cG9ydCBjbGFzcyBIdHRwIGltcGxlbWVudHMgSUh0dHAge1xuICAgIHByaXZhdGUgaHR0cEV4dGVuZGVyOiBJSHR0cEV4dGVuZDtcbiAgICBwcml2YXRlIHJlYWQ6IElSZWFkO1xuICAgIHByaXZhdGUgcGVyc2lzdGVuY2U6IElQZXJzaXN0ZW5jZTtcbiAgICBwcml2YXRlIHNlbmRlckZuOiB0eXBlb2YgTWVzc2VuZ2VyLnNlbmRSZXF1ZXN0O1xuXG4gICAgY29uc3RydWN0b3IocmVhZDogSVJlYWQsIHBlcnNpc3RlbmNlOiBJUGVyc2lzdGVuY2UsIGh0dHBFeHRlbmRlcjogSUh0dHBFeHRlbmQsIHNlbmRlckZuOiB0eXBlb2YgTWVzc2VuZ2VyLnNlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMucmVhZCA9IHJlYWQ7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2UgPSBwZXJzaXN0ZW5jZTtcbiAgICAgICAgdGhpcy5odHRwRXh0ZW5kZXIgPSBodHRwRXh0ZW5kZXI7XG4gICAgICAgIHRoaXMuc2VuZGVyRm4gPSBzZW5kZXJGbjtcbiAgICAgICAgLy8gdGhpcy5odHRwRXh0ZW5kZXIgPSBuZXcgSHR0cEV4dGVuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJSHR0cFJlcXVlc3QpOiBQcm9taXNlPElIdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NIYW5kbGVyKHVybCwgJ2dldCcsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBJSHR0cFJlcXVlc3QpOiBQcm9taXNlPElIdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NIYW5kbGVyKHVybCwgJ3B1dCcsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KHVybDogc3RyaW5nLCBvcHRpb25zPzogSUh0dHBSZXF1ZXN0KTogUHJvbWlzZTxJSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzSGFuZGxlcih1cmwsICdwb3N0Jywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbCh1cmw6IHN0cmluZywgb3B0aW9ucz86IElIdHRwUmVxdWVzdCk6IFByb21pc2U8SUh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc0hhbmRsZXIodXJsLCAnZGVsZXRlJywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGNoKHVybDogc3RyaW5nLCBvcHRpb25zPzogSUh0dHBSZXF1ZXN0KTogUHJvbWlzZTxJSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzSGFuZGxlcih1cmwsICdwYXRjaCcsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX3Byb2Nlc3NIYW5kbGVyKHVybDogc3RyaW5nLCBtZXRob2Q6IFJlcXVlc3RNZXRob2QsIG9wdGlvbnM/OiBJSHR0cFJlcXVlc3QpOiBQcm9taXNlPElIdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdC5oZWFkZXJzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmh0dHBFeHRlbmRlci5nZXREZWZhdWx0SGVhZGVycygpLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3QuaGVhZGVycz8uW2tleV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzIVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdC5wYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXF1ZXN0LnBhcmFtcyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5odHRwRXh0ZW5kZXIuZ2V0RGVmYXVsdFBhcmFtcygpLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3QucGFyYW1zPy5ba2V5XSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnBhcmFtcyFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5odHRwRXh0ZW5kZXIuZ2V0UHJlUmVxdWVzdEhhbmRsZXJzKCkpIHtcbiAgICAgICAgICAgIHJlcXVlc3QgPSBhd2FpdCBoYW5kbGVyLmV4ZWN1dGVQcmVIdHRwUmVxdWVzdCh1cmwsIHJlcXVlc3QsIHRoaXMucmVhZCwgdGhpcy5wZXJzaXN0ZW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgeyByZXN1bHQ6IHJlc3BvbnNlIH0gPSBhd2FpdCB0aGlzLnNlbmRlckZuKHtcbiAgICAgICAgICAgIG1ldGhvZDogYGJyaWRnZXM6Z2V0SHR0cEJyaWRnZTpkb0NhbGxgLFxuICAgICAgICAgICAgcGFyYW1zOiBbe1xuICAgICAgICAgICAgICAgIGFwcElkOiBBcHBPYmplY3RSZWdpc3RyeS5nZXQ8c3RyaW5nPignaWQnKSxcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5odHRwRXh0ZW5kZXIuZ2V0UHJlUmVzcG9uc2VIYW5kbGVycygpKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZXhlY3V0ZVByZUh0dHBSZXNwb25zZShyZXNwb25zZSBhcyBJSHR0cFJlc3BvbnNlLCB0aGlzLnJlYWQsIHRoaXMucGVyc2lzdGVuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlIGFzIElIdHRwUmVzcG9uc2U7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLFNBQVMsaUJBQWlCLFFBQVEsNkJBQTZCO0FBSS9ELE9BQU8s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