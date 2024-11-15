import { AppObjectRegistry } from '../../AppObjectRegistry.ts';
import { AppAccessorsInstance } from '../../lib/accessors/mod.ts';
export default async function handleInitialize() {
  const app = AppObjectRegistry.get('app');
  if (typeof app?.initialize !== 'function') {
    throw new Error('App must contain an initialize function', {
      cause: 'invalid_app'
    });
  }
  await app.initialize(AppAccessorsInstance.getConfigurationExtend(), AppAccessorsInstance.getEnvironmentRead());
  return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZ3VpbGhlcm1lZ2F6em8vZGV2L1JvY2tldC5DaGF0L3BhY2thZ2VzL2FwcHMtZW5naW5lL2Rlbm8tcnVudGltZS9oYW5kbGVycy9hcHAvaGFuZGxlSW5pdGlhbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gJ0Byb2NrZXQuY2hhdC9hcHBzLWVuZ2luZS9kZWZpbml0aW9uL0FwcC50cyc7XG5cbmltcG9ydCB7IEFwcE9iamVjdFJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vQXBwT2JqZWN0UmVnaXN0cnkudHMnO1xuaW1wb3J0IHsgQXBwQWNjZXNzb3JzSW5zdGFuY2UgfSBmcm9tICcuLi8uLi9saWIvYWNjZXNzb3JzL21vZC50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUluaXRpYWxpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgYXBwID0gQXBwT2JqZWN0UmVnaXN0cnkuZ2V0PEFwcD4oJ2FwcCcpO1xuXG4gICAgaWYgKHR5cGVvZiBhcHA/LmluaXRpYWxpemUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHAgbXVzdCBjb250YWluIGFuIGluaXRpYWxpemUgZnVuY3Rpb24nLCB7XG4gICAgICAgICAgICBjYXVzZTogJ2ludmFsaWRfYXBwJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgYXBwLmluaXRpYWxpemUoQXBwQWNjZXNzb3JzSW5zdGFuY2UuZ2V0Q29uZmlndXJhdGlvbkV4dGVuZCgpLCBBcHBBY2Nlc3NvcnNJbnN0YW5jZS5nZXRFbnZpcm9ubWVudFJlYWQoKSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFNBQVMsaUJBQWlCLFFBQVEsNkJBQTZCO0FBQy9ELFNBQVMsb0JBQW9CLFFBQVEsNkJBQTZCO0FBRWxFLGVBQWUsZUFBZTtFQUMxQixNQUFNLE1BQU0sa0JBQWtCLEdBQUcsQ0FBTTtFQUV2QyxJQUFJLE9BQU8sS0FBSyxlQUFlLFlBQVk7SUFDdkMsTUFBTSxJQUFJLE1BQU0sMkNBQTJDO01BQ3ZELE9BQU87SUFDWDtFQUNKO0VBRUEsTUFBTSxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsc0JBQXNCLElBQUkscUJBQXFCLGtCQUFrQjtFQUUzRyxPQUFPO0FBQ1gifQ==