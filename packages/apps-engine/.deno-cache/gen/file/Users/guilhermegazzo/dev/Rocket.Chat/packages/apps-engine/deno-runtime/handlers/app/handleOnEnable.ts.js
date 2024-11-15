import { AppObjectRegistry } from '../../AppObjectRegistry.ts';
import { AppAccessorsInstance } from '../../lib/accessors/mod.ts';
export default function handleOnEnable() {
  const app = AppObjectRegistry.get('app');
  if (typeof app?.onEnable !== 'function') {
    throw new Error('App must contain an onEnable function', {
      cause: 'invalid_app'
    });
  }
  return app.onEnable(AppAccessorsInstance.getEnvironmentRead(), AppAccessorsInstance.getConfigurationModify());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZ3VpbGhlcm1lZ2F6em8vZGV2L1JvY2tldC5DaGF0L3BhY2thZ2VzL2FwcHMtZW5naW5lL2Rlbm8tcnVudGltZS9oYW5kbGVycy9hcHAvaGFuZGxlT25FbmFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHAgfSBmcm9tICdAcm9ja2V0LmNoYXQvYXBwcy1lbmdpbmUvZGVmaW5pdGlvbi9BcHAudHMnO1xuXG5pbXBvcnQgeyBBcHBPYmplY3RSZWdpc3RyeSB9IGZyb20gJy4uLy4uL0FwcE9iamVjdFJlZ2lzdHJ5LnRzJztcbmltcG9ydCB7IEFwcEFjY2Vzc29yc0luc3RhbmNlIH0gZnJvbSAnLi4vLi4vbGliL2FjY2Vzc29ycy9tb2QudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVPbkVuYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBhcHAgPSBBcHBPYmplY3RSZWdpc3RyeS5nZXQ8QXBwPignYXBwJyk7XG5cbiAgICBpZiAodHlwZW9mIGFwcD8ub25FbmFibGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHAgbXVzdCBjb250YWluIGFuIG9uRW5hYmxlIGZ1bmN0aW9uJywge1xuICAgICAgICAgICAgY2F1c2U6ICdpbnZhbGlkX2FwcCcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcHAub25FbmFibGUoQXBwQWNjZXNzb3JzSW5zdGFuY2UuZ2V0RW52aXJvbm1lbnRSZWFkKCksIEFwcEFjY2Vzc29yc0luc3RhbmNlLmdldENvbmZpZ3VyYXRpb25Nb2RpZnkoKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxpQkFBaUIsUUFBUSw2QkFBNkI7QUFDL0QsU0FBUyxvQkFBb0IsUUFBUSw2QkFBNkI7QUFFbEUsZUFBZSxTQUFTO0VBQ3BCLE1BQU0sTUFBTSxrQkFBa0IsR0FBRyxDQUFNO0VBRXZDLElBQUksT0FBTyxLQUFLLGFBQWEsWUFBWTtJQUNyQyxNQUFNLElBQUksTUFBTSx5Q0FBeUM7TUFDckQsT0FBTztJQUNYO0VBQ0o7RUFFQSxPQUFPLElBQUksUUFBUSxDQUFDLHFCQUFxQixrQkFBa0IsSUFBSSxxQkFBcUIsc0JBQXNCO0FBQzlHIn0=