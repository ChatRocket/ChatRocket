import type { LicenseLimitKind } from '@rocket.chat/license';

import { useLicense } from './useLicense';

export const useShouldPreventAction = (action: LicenseLimitKind): boolean => {
	const { data: { preventedActions } = {} } = useLicense();

	return Boolean(preventedActions?.[action]);
};
