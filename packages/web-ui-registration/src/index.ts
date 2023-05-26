import RegistrationPageRouter from './RegistrationPageRouter';
import CMSPage from './CMSPage';
import ResetPasswordPage from './ResetPassword/ResetPasswordPage';

export type { LoginRoutes } from './hooks/useLoginRouter';
export { usePasswordPolicy } from './hooks/usePasswordPolicy';
export { CMSPage, ResetPasswordPage };

export default RegistrationPageRouter;
