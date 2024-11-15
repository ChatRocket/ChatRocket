import { AppObjectRegistry } from '../../AppObjectRegistry.ts';
import { AppAccessorsInstance } from '../../lib/accessors/mod.ts';
export default function handleOnPreSettingUpdate(params) {
  const app = AppObjectRegistry.get('app');
  if (typeof app?.onPreSettingUpdate !== 'function') {
    throw new Error('App must contain an onPreSettingUpdate function', {
      cause: 'invalid_app'
    });
  }
  if (!Array.isArray(params)) {
    throw new Error('Invalid params', {
      cause: 'invalid_param_type'
    });
  }
  const [setting] = params;
  return app.onPreSettingUpdate(setting, AppAccessorsInstance.getConfigurationModify(), AppAccessorsInstance.getReader(), AppAccessorsInstance.getHttp());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZ3VpbGhlcm1lZ2F6em8vZGV2L1JvY2tldC5DaGF0L3BhY2thZ2VzL2FwcHMtZW5naW5lL2Rlbm8tcnVudGltZS9oYW5kbGVycy9hcHAvaGFuZGxlT25QcmVTZXR0aW5nVXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSAnQHJvY2tldC5jaGF0L2FwcHMtZW5naW5lL2RlZmluaXRpb24vQXBwLnRzJztcblxuaW1wb3J0IHsgQXBwT2JqZWN0UmVnaXN0cnkgfSBmcm9tICcuLi8uLi9BcHBPYmplY3RSZWdpc3RyeS50cyc7XG5pbXBvcnQgeyBBcHBBY2Nlc3NvcnNJbnN0YW5jZSB9IGZyb20gJy4uLy4uL2xpYi9hY2Nlc3NvcnMvbW9kLnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlT25QcmVTZXR0aW5nVXBkYXRlKHBhcmFtczogdW5rbm93bik6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgYXBwID0gQXBwT2JqZWN0UmVnaXN0cnkuZ2V0PEFwcD4oJ2FwcCcpO1xuXG4gICAgaWYgKHR5cGVvZiBhcHA/Lm9uUHJlU2V0dGluZ1VwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcCBtdXN0IGNvbnRhaW4gYW4gb25QcmVTZXR0aW5nVXBkYXRlIGZ1bmN0aW9uJywge1xuICAgICAgICAgICAgY2F1c2U6ICdpbnZhbGlkX2FwcCcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXJhbXMnLCB7IGNhdXNlOiAnaW52YWxpZF9wYXJhbV90eXBlJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBbc2V0dGluZ10gPSBwYXJhbXMgYXMgW1JlY29yZDxzdHJpbmcsIHVua25vd24+XTtcblxuICAgIHJldHVybiBhcHAub25QcmVTZXR0aW5nVXBkYXRlKHNldHRpbmcsIEFwcEFjY2Vzc29yc0luc3RhbmNlLmdldENvbmZpZ3VyYXRpb25Nb2RpZnkoKSwgQXBwQWNjZXNzb3JzSW5zdGFuY2UuZ2V0UmVhZGVyKCksIEFwcEFjY2Vzc29yc0luc3RhbmNlLmdldEh0dHAoKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxpQkFBaUIsUUFBUSw2QkFBNkI7QUFDL0QsU0FBUyxvQkFBb0IsUUFBUSw2QkFBNkI7QUFFbEUsZUFBZSxTQUFTLHlCQUF5QixNQUFlO0VBQzVELE1BQU0sTUFBTSxrQkFBa0IsR0FBRyxDQUFNO0VBRXZDLElBQUksT0FBTyxLQUFLLHVCQUF1QixZQUFZO0lBQy9DLE1BQU0sSUFBSSxNQUFNLG1EQUFtRDtNQUMvRCxPQUFPO0lBQ1g7RUFDSjtFQUVBLElBQUksQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTO0lBQ3hCLE1BQU0sSUFBSSxNQUFNLGtCQUFrQjtNQUFFLE9BQU87SUFBcUI7RUFDcEU7RUFFQSxNQUFNLENBQUMsUUFBUSxHQUFHO0VBRWxCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLHFCQUFxQixzQkFBc0IsSUFBSSxxQkFBcUIsU0FBUyxJQUFJLHFCQUFxQixPQUFPO0FBQ3hKIn0=