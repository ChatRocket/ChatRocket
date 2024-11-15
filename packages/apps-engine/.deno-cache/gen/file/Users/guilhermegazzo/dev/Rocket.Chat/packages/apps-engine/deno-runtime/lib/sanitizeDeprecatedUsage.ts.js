import { fixBrokenSynchronousAPICalls } from "./ast/mod.ts";
function hasPotentialDeprecatedUsage(source) {
  return(// potential usage of Room.usernames getter
  source.includes('.usernames') || // potential usage of LivechatRead.isOnline method
  source.includes('.isOnline(') || // potential usage of LivechatCreator.createToken method
  source.includes('.createToken('));
}
export function sanitizeDeprecatedUsage(source) {
  if (!hasPotentialDeprecatedUsage(source)) {
    return source;
  }
  return fixBrokenSynchronousAPICalls(source);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZ3VpbGhlcm1lZ2F6em8vZGV2L1JvY2tldC5DaGF0L3BhY2thZ2VzL2FwcHMtZW5naW5lL2Rlbm8tcnVudGltZS9saWIvc2FuaXRpemVEZXByZWNhdGVkVXNhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZml4QnJva2VuU3luY2hyb25vdXNBUElDYWxscyB9IGZyb20gXCIuL2FzdC9tb2QudHNcIjtcblxuZnVuY3Rpb24gaGFzUG90ZW50aWFsRGVwcmVjYXRlZFVzYWdlKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gcG90ZW50aWFsIHVzYWdlIG9mIFJvb20udXNlcm5hbWVzIGdldHRlclxuICAgICAgICBzb3VyY2UuaW5jbHVkZXMoJy51c2VybmFtZXMnKSB8fFxuICAgICAgICAvLyBwb3RlbnRpYWwgdXNhZ2Ugb2YgTGl2ZWNoYXRSZWFkLmlzT25saW5lIG1ldGhvZFxuICAgICAgICBzb3VyY2UuaW5jbHVkZXMoJy5pc09ubGluZSgnKSB8fFxuICAgICAgICAvLyBwb3RlbnRpYWwgdXNhZ2Ugb2YgTGl2ZWNoYXRDcmVhdG9yLmNyZWF0ZVRva2VuIG1ldGhvZFxuICAgICAgICBzb3VyY2UuaW5jbHVkZXMoJy5jcmVhdGVUb2tlbignKVxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplRGVwcmVjYXRlZFVzYWdlKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgaWYgKCFoYXNQb3RlbnRpYWxEZXByZWNhdGVkVXNhZ2Uoc291cmNlKSkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIHJldHVybiBmaXhCcm9rZW5TeW5jaHJvbm91c0FQSUNhbGxzKHNvdXJjZSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyw0QkFBNEIsUUFBUSxlQUFlO0FBRTVELFNBQVMsNEJBQTRCLE1BQWM7RUFDL0MsT0FDSSwyQ0FBMkM7RUFDM0MsT0FBTyxRQUFRLENBQUMsaUJBQ2hCLGtEQUFrRDtFQUNsRCxPQUFPLFFBQVEsQ0FBQyxpQkFDaEIsd0RBQXdEO0VBQ3hELE9BQU8sUUFBUSxDQUFDO0FBRXhCO0FBRUEsT0FBTyxTQUFTLHdCQUF3QixNQUFjO0VBQ2xELElBQUksQ0FBQyw0QkFBNEIsU0FBUztJQUN0QyxPQUFPO0VBQ1g7RUFFQSxPQUFPLDZCQUE2QjtBQUN4QyJ9