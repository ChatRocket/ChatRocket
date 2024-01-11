import { Button, Field, FieldError, FieldHint, FieldLabel, FieldRow, TextInput } from '@rocket.chat/fuselage';
import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import type { TranslationKey } from '@rocket.chat/ui-contexts';
import { useEndpoint } from '@rocket.chat/ui-contexts';
import { useMutation } from '@tanstack/react-query';
import type { ComponentProps } from 'react';
import React from 'react';
import type { Control } from 'react-hook-form';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { TriggersPayload } from './EditTrigger';
import { useFieldError } from './hooks/useFieldError';

type ActionExternalUrlType = ComponentProps<typeof Field> & {
	control: Control<TriggersPayload>;
	index: number;
};

export const ActionExternalUrl = ({ control, index, ...props }: ActionExternalUrlType) => {
	const { t } = useTranslation();
	const { trigger } = useFormContext<TriggersPayload>();

	const serviceUrlFieldId = useUniqueId();
	const serviceUrlFieldName = `actions.${index}.params.serviceUrl` as const;
	const serviceTimeoutFieldName = `actions.${index}.params.serviceTimeout` as const;

	const serviceTimeoutValue = useWatch({ control, name: serviceTimeoutFieldName });
	const [serviceUrlError] = useFieldError({ control, name: serviceUrlFieldName });

	const webhookTestEndpoint = useEndpoint('POST', '/v1/livechat/triggers/external-service/test');
	const webhookTest = useMutation({ mutationFn: webhookTestEndpoint });

	const testExternalService = async (serviceUrl: string) => {
		if (!serviceUrl) {
			return true;
		}

		try {
			await webhookTest.mutateAsync({
				webhookUrl: serviceUrl,
				timeout: serviceTimeoutValue || 10000,
				fallbackMessage: '',
				extraData: [],
			});
			return true;
		} catch (e) {
			return t((e as { error: TranslationKey }).error);
		}
	};

	return (
		<Field {...props}>
			<FieldLabel htmlFor={serviceUrlFieldId}>{t('External_service_url')}*</FieldLabel>
			<FieldRow>
				<Controller
					name={serviceUrlFieldName}
					control={control}
					shouldUnregister
					defaultValue=''
					rules={{
						required: t('The_field_is_required', t('External_service_url')),
						validate: testExternalService,
						deps: serviceTimeoutFieldName,
					}}
					render={({ field }) => {
						return <TextInput {...field} disabled={webhookTest.isLoading} error={serviceUrlError?.message} />;
					}}
				/>
			</FieldRow>

			{serviceUrlError && <FieldError>{serviceUrlError.message}</FieldError>}

			<FieldHint>{t('External_service_test_hint')}</FieldHint>

			<Button loading={webhookTest.isLoading} onClick={() => trigger(serviceUrlFieldName)}>
				{t('Send_Test')}
			</Button>
		</Field>
	);
};
