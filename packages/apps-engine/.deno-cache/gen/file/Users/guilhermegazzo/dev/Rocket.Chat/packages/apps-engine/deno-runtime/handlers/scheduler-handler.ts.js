import { JsonRpcError } from 'jsonrpc-lite';
import { AppObjectRegistry } from '../AppObjectRegistry.ts';
import { AppAccessorsInstance } from '../lib/accessors/mod.ts';
export default async function handleScheduler(method, params) {
  const [, processorId] = method.split(':');
  if (!Array.isArray(params)) {
    return JsonRpcError.invalidParams({
      message: 'Invalid params'
    });
  }
  const [context] = params;
  const app = AppObjectRegistry.get('app');
  if (!app) {
    return JsonRpcError.internalError({
      message: 'App not found'
    });
  }
  // AppSchedulerManager will append the appId to the processor name to avoid conflicts
  const processor = AppObjectRegistry.get(`scheduler:${processorId}`);
  if (!processor) {
    return JsonRpcError.methodNotFound({
      message: `Could not find processor for method ${method}`
    });
  }
  app.getLogger().debug(`Job processor ${processor.id} is being executed...`);
  try {
    await processor.processor(context, AppAccessorsInstance.getReader(), AppAccessorsInstance.getModifier(), AppAccessorsInstance.getHttp(), AppAccessorsInstance.getPersistence());
    app.getLogger().debug(`Job processor ${processor.id} was successfully executed`);
    return null;
  } catch (e) {
    app.getLogger().error(e);
    app.getLogger().error(`Job processor ${processor.id} was unsuccessful`);
    return JsonRpcError.internalError({
      message: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZ3VpbGhlcm1lZ2F6em8vZGV2L1JvY2tldC5DaGF0L3BhY2thZ2VzL2FwcHMtZW5naW5lL2Rlbm8tcnVudGltZS9oYW5kbGVycy9zY2hlZHVsZXItaGFuZGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZpbmVkLCBKc29uUnBjRXJyb3IgfSBmcm9tICdqc29ucnBjLWxpdGUnO1xuaW1wb3J0IHR5cGUgeyBBcHAgfSBmcm9tICdAcm9ja2V0LmNoYXQvYXBwcy1lbmdpbmUvZGVmaW5pdGlvbi9BcHAudHMnO1xuaW1wb3J0IHR5cGUgeyBJUHJvY2Vzc29yIH0gZnJvbSAnQHJvY2tldC5jaGF0L2FwcHMtZW5naW5lL2RlZmluaXRpb24vc2NoZWR1bGVyL0lQcm9jZXNzb3IudHMnO1xuXG5pbXBvcnQgeyBBcHBPYmplY3RSZWdpc3RyeSB9IGZyb20gJy4uL0FwcE9iamVjdFJlZ2lzdHJ5LnRzJztcbmltcG9ydCB7IEFwcEFjY2Vzc29yc0luc3RhbmNlIH0gZnJvbSAnLi4vbGliL2FjY2Vzc29ycy9tb2QudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVTY2hlZHVsZXIobWV0aG9kOiBzdHJpbmcsIHBhcmFtczogdW5rbm93bik6IFByb21pc2U8RGVmaW5lZCB8IEpzb25ScGNFcnJvcj4ge1xuICAgIGNvbnN0IFssIHByb2Nlc3NvcklkXSA9IG1ldGhvZC5zcGxpdCgnOicpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBKc29uUnBjRXJyb3IuaW52YWxpZFBhcmFtcyh7IG1lc3NhZ2U6ICdJbnZhbGlkIHBhcmFtcycgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgW2NvbnRleHRdID0gcGFyYW1zIGFzIFtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPl07XG5cbiAgICBjb25zdCBhcHAgPSBBcHBPYmplY3RSZWdpc3RyeS5nZXQ8QXBwPignYXBwJyk7XG5cbiAgICBpZiAoIWFwcCkge1xuICAgICAgICByZXR1cm4gSnNvblJwY0Vycm9yLmludGVybmFsRXJyb3IoeyBtZXNzYWdlOiAnQXBwIG5vdCBmb3VuZCcgfSk7XG4gICAgfVxuXG4gICAgLy8gQXBwU2NoZWR1bGVyTWFuYWdlciB3aWxsIGFwcGVuZCB0aGUgYXBwSWQgdG8gdGhlIHByb2Nlc3NvciBuYW1lIHRvIGF2b2lkIGNvbmZsaWN0c1xuICAgIGNvbnN0IHByb2Nlc3NvciA9IEFwcE9iamVjdFJlZ2lzdHJ5LmdldDxJUHJvY2Vzc29yPihgc2NoZWR1bGVyOiR7cHJvY2Vzc29ySWR9YCk7XG5cbiAgICBpZiAoIXByb2Nlc3Nvcikge1xuICAgICAgICByZXR1cm4gSnNvblJwY0Vycm9yLm1ldGhvZE5vdEZvdW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBDb3VsZCBub3QgZmluZCBwcm9jZXNzb3IgZm9yIG1ldGhvZCAke21ldGhvZH1gLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcHAuZ2V0TG9nZ2VyKCkuZGVidWcoYEpvYiBwcm9jZXNzb3IgJHtwcm9jZXNzb3IuaWR9IGlzIGJlaW5nIGV4ZWN1dGVkLi4uYCk7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcm9jZXNzb3IucHJvY2Vzc29yKFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIEFwcEFjY2Vzc29yc0luc3RhbmNlLmdldFJlYWRlcigpLFxuICAgICAgICAgICAgQXBwQWNjZXNzb3JzSW5zdGFuY2UuZ2V0TW9kaWZpZXIoKSxcbiAgICAgICAgICAgIEFwcEFjY2Vzc29yc0luc3RhbmNlLmdldEh0dHAoKSxcbiAgICAgICAgICAgIEFwcEFjY2Vzc29yc0luc3RhbmNlLmdldFBlcnNpc3RlbmNlKCksXG4gICAgICAgICk7XG5cbiAgICAgICAgYXBwLmdldExvZ2dlcigpLmRlYnVnKGBKb2IgcHJvY2Vzc29yICR7cHJvY2Vzc29yLmlkfSB3YXMgc3VjY2Vzc2Z1bGx5IGV4ZWN1dGVkYCk7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhcHAuZ2V0TG9nZ2VyKCkuZXJyb3IoZSk7XG4gICAgICAgIGFwcC5nZXRMb2dnZXIoKS5lcnJvcihgSm9iIHByb2Nlc3NvciAke3Byb2Nlc3Nvci5pZH0gd2FzIHVuc3VjY2Vzc2Z1bGApO1xuXG4gICAgICAgIHJldHVybiBKc29uUnBjRXJyb3IuaW50ZXJuYWxFcnJvcih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBa0IsWUFBWSxRQUFRLGVBQWU7QUFJckQsU0FBUyxpQkFBaUIsUUFBUSwwQkFBMEI7QUFDNUQsU0FBUyxvQkFBb0IsUUFBUSwwQkFBMEI7QUFFL0QsZUFBZSxlQUFlLGdCQUFnQixNQUFjLEVBQUUsTUFBZTtFQUN6RSxNQUFNLEdBQUcsWUFBWSxHQUFHLE9BQU8sS0FBSyxDQUFDO0VBQ3JDLElBQUksQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTO0lBQ3hCLE9BQU8sYUFBYSxhQUFhLENBQUM7TUFBRSxTQUFTO0lBQWlCO0VBQ2xFO0VBRUEsTUFBTSxDQUFDLFFBQVEsR0FBRztFQUVsQixNQUFNLE1BQU0sa0JBQWtCLEdBQUcsQ0FBTTtFQUV2QyxJQUFJLENBQUMsS0FBSztJQUNOLE9BQU8sYUFBYSxhQUFhLENBQUM7TUFBRSxTQUFTO0lBQWdCO0VBQ2pFO0VBRUEscUZBQXFGO0VBQ3JGLE1BQU0sWUFBWSxrQkFBa0IsR0FBRyxDQUFhLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQztFQUU5RSxJQUFJLENBQUMsV0FBVztJQUNaLE9BQU8sYUFBYSxjQUFjLENBQUM7TUFDL0IsU0FBUyxDQUFDLG9DQUFvQyxFQUFFLE9BQU8sQ0FBQztJQUM1RDtFQUNKO0VBRUEsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0VBRTFFLElBQUk7SUFDQSxNQUFNLFVBQVUsU0FBUyxDQUNyQixTQUNBLHFCQUFxQixTQUFTLElBQzlCLHFCQUFxQixXQUFXLElBQ2hDLHFCQUFxQixPQUFPLElBQzVCLHFCQUFxQixjQUFjO0lBR3ZDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUUvRSxPQUFPO0VBQ1gsRUFBRSxPQUFPLEdBQUc7SUFDUixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDdEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBRXRFLE9BQU8sYUFBYSxhQUFhLENBQUM7TUFBRSxTQUFTLEVBQUUsT0FBTztJQUFDO0VBQzNEO0FBQ0oifQ==