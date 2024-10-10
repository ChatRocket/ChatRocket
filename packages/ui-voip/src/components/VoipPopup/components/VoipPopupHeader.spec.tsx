import { mockAppRoot, MockedDeviceContext } from '@rocket.chat/mock-providers';
import { render, screen } from '@testing-library/react';

import VoipPopupHeader from './VoipPopupHeader';

const appRoot = mockAppRoot().wrap((children) => <MockedDeviceContext>{children}</MockedDeviceContext>);

it('should render title', () => {
	render(<VoipPopupHeader>voice call header title</VoipPopupHeader>, { wrapper: appRoot.build(), legacyRoot: true });

	expect(screen.getByText('voice call header title')).toBeInTheDocument();
});

it('should not render close button when onClose is not provided', () => {
	render(<VoipPopupHeader />, { wrapper: appRoot.build(), legacyRoot: true });

	expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
});

it('should render close button when onClose is provided', () => {
	render(<VoipPopupHeader onClose={jest.fn()} />, { wrapper: appRoot.build(), legacyRoot: true });

	expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
});

it('should call onClose when close button is clicked', () => {
	const closeFn = jest.fn();
	render(<VoipPopupHeader onClose={closeFn} />, { wrapper: appRoot.build(), legacyRoot: true });

	screen.getByRole('button', { name: 'Close' }).click();
	expect(closeFn).toHaveBeenCalled();
});

it('should render settings button by default', () => {
	render(<VoipPopupHeader />, { wrapper: appRoot.build(), legacyRoot: true });

	expect(screen.getByRole('button', { name: /Device_settings/ })).toBeInTheDocument();
});

it('should not render settings button when hideSettings is true', () => {
	render(<VoipPopupHeader hideSettings>text</VoipPopupHeader>, { wrapper: appRoot.build(), legacyRoot: true });

	expect(screen.queryByRole('button', { name: /Device_settings/ })).not.toBeInTheDocument();
});
