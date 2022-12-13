import { Box, Button } from '@rocket.chat/fuselage';
import { useContentBoxSize, useMutableCallback } from '@rocket.chat/fuselage-hooks';
import {
	MessageComposerAction,
	MessageComposerToolbarActions,
	MessageComposer,
	MessageComposerInput,
	MessageComposerToolbar,
	MessageComposerActionsDivider,
	MessageComposerToolbarSubmit,
} from '@rocket.chat/ui-composer';
import { useTranslation, useSetting, useUserPreference, useLayout } from '@rocket.chat/ui-contexts';
import type { MouseEventHandler, ReactElement, FormEvent, KeyboardEventHandler, MutableRefObject } from 'react';
import React, { memo, useRef, useReducer, useCallback } from 'react';
import { useSubscription } from 'use-subscription';

import { EmojiPicker } from '../../../../../../../app/emoji/client';
import { createComposerAPI } from '../../../../../../../app/ui-message/client/messageBox/createComposerAPI';
import type { MessageBoxTemplateInstance } from '../../../../../../../app/ui-message/client/messageBox/messageBox';
import { applyFormatting, formattingButtons } from '../../../../../../../app/ui-message/client/messageBox/messageBoxFormatting';
import { messageBox, popover } from '../../../../../../../app/ui-utils/client';
import { useReactiveValue } from '../../../../../../hooks/useReactiveValue';
import { roomCoordinator } from '../../../../../../lib/rooms/roomCoordinator';
import { keyCodes } from '../../../../../../lib/utils/keyCodes';
import AudioMessageRecorder from '../../../../../composer/AudioMessageRecorder';
import { useChat } from '../../../../contexts/ChatContext';
import BlazeTemplate from '../../../BlazeTemplate';
import { useAutoGrow } from '../RoomComposer/hooks/useAutoGrow';
import UserActionIndicator from '../UserActionIndicator';
import MessageBoxReplies from './MessageBoxReplies';

type MessageBoxProps = {} & MessageBoxTemplateInstance['data'];

const reducer = (_: unknown, event: FormEvent<HTMLInputElement>): boolean => {
	const target = event.target as HTMLInputElement;

	return Boolean(target.value.trim());
};

export const MessageBox = ({
	rid,
	tmid,
	isEmbedded,
	onSend,
	onNavigateToNextMessage,
	onNavigateToPreviousMessage,
	onEscape,
	showFormattingTips,
	subscription,
	tshow,
}: MessageBoxProps): ReactElement => {
	const [typing, setTyping] = useReducer(reducer, false);

	const { isMobile } = useLayout();
	const sendOnEnterBehavior = useUserPreference<'normal' | 'alternative' | 'desktop'>('sendOnEnter') || isMobile;
	const sendOnEnter = sendOnEnterBehavior == null || sendOnEnterBehavior === 'normal' || (sendOnEnterBehavior === 'desktop' && !isMobile);

	const t = useTranslation();

	const chat = useChat();

	if (!chat) {
		throw new Error('Chat context not found');
	}

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const shadowRef = useRef(null);

	const callbackRef = useCallback(
		(node: HTMLTextAreaElement) => {
			const storageID = `${rid}${tmid ? `-${tmid}` : ''}`;
			if (node === null) {
				return;
			}
			if (!chat || chat.composer) {
				return;
			}
			chat.setComposerAPI(createComposerAPI(node, storageID));
			(textareaRef as MutableRefObject<HTMLTextAreaElement>).current = node;
		},
		[chat, rid, tmid],
	);

	const maxLength = useSetting('Message_MaxAllowedSize');

	const useEmojis = useUserPreference<boolean>('useEmojis');

	const handleOpenEmojiPicker: MouseEventHandler<HTMLElement> = useMutableCallback((e) => {
		e.stopPropagation();
		e.preventDefault();

		if (!useEmojis) {
			return;
		}

		if (EmojiPicker.isOpened()) {
			EmojiPicker.close();
			return;
		}

		EmojiPicker.open(e.currentTarget, (emoji: string) => {
			const emojiValue = `:${emoji}: `;
			chat?.composer?.insertText(emojiValue);
		});
	});

	const handleSendMessage = useMutableCallback(() => {
		const text = chat?.composer?.text;
		if (!text) {
			console.warn('No text to send');
			return;
		}
		onSend?.({
			value: text,
			tshow,
		}).then(() => {
			chat?.composer?.clear();
		});
	});

	const handler: KeyboardEventHandler<HTMLTextAreaElement> = useMutableCallback((event) => {
		const { which: keyCode } = event;

		const input = event.target as HTMLTextAreaElement;

		const isSubmitKey = keyCode === keyCodes.CARRIAGE_RETURN || keyCode === keyCodes.NEW_LINE;

		if (isSubmitKey) {
			const withModifier = event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
			const isSending = (sendOnEnter && !withModifier) || (!sendOnEnter && withModifier);

			if (!isSending) {
				return false;
			}
			event.preventDefault();

			const text = chat?.composer?.text;
			if (!text) {
				console.warn('No text to send');
				return;
			}
			handleSendMessage();
			return false;
		}

		if (event.shiftKey || event.ctrlKey || event.metaKey) {
			return;
		}

		switch (event.key) {
			case 'Escape': {
				if (chat?.currentEditing) {
					event.preventDefault();
					event.stopPropagation();

					chat?.currentEditing.reset().then((reset) => {
						if (!reset) {
							chat?.currentEditing?.cancel();
						}
					});

					return;
				}

				if (!input.value.trim()) onEscape?.();
				return;
			}

			case 'ArrowUp': {
				if (input.selectionEnd === 0) {
					event.preventDefault();
					event.stopPropagation();

					onNavigateToNextMessage?.();

					if (event.altKey) {
						input.setSelectionRange(0, 0);
					}
				}

				return;
			}

			case 'ArrowDown': {
				if (input.selectionEnd === input.value.length) {
					event.preventDefault();
					event.stopPropagation();

					onNavigateToPreviousMessage?.();

					if (event.altKey) {
						input.setSelectionRange(input.value.length, input.value.length);
					}
				}
			}
		}
	});

	const isEditing = useSubscription({
		getCurrentValue: chat.composer?.editing.get ?? (() => false),
		subscribe: chat.composer?.editing.subscribe ?? (() => () => undefined),
	});

	const isRecording = useSubscription({
		getCurrentValue: chat.composer?.recording.get ?? (() => false),
		subscribe: chat.composer?.recording.subscribe ?? (() => () => undefined),
	});

	const { textAreaStyle, shadowStyle } = useAutoGrow(textareaRef, shadowRef);

	const canSend = useReactiveValue(useCallback(() => roomCoordinator.verifyCanSendMessage(rid), []));

	const sizes = useContentBoxSize(textareaRef);

	console.log(sizes);

	return (
		<>
			<MessageComposer variant={isEditing ? 'editing' : undefined}>
				{chat?.composer?.quotedMessages && <MessageBoxReplies />}
				<BlazeTemplate name='messagePopupConfig' tmid={tmid} rid={rid} getInput={() => textareaRef.current} />
				<MessageComposerInput
					ref={callbackRef}
					aria-label={t('Message')}
					name='msg'
					disabled={isRecording}
					onChange={setTyping}
					style={textAreaStyle}
					maxLength={Number.isInteger(maxLength) ? parseInt(maxLength as string) : undefined}
					placeholder={t('Message')}
					className='rc-message-box__textarea js-input-message'
					onKeyDown={handler}
					is='textarea'
				/>
				<div ref={shadowRef} style={shadowStyle} />
				<MessageComposerToolbar>
					<MessageComposerToolbarActions>
						<MessageComposerAction icon='emoji' disabled={!useEmojis || isRecording} onClick={handleOpenEmojiPicker} title={t('Emoji')} />
						<MessageComposerActionsDivider />
						{formattingButtons
							.filter(({ condition }) => !condition || condition())
							.map(({ icon, link, text, label, pattern }) =>
								icon ? (
									<MessageComposerAction
										disabled={isRecording}
										icon={icon}
										key={label}
										data-id={label}
										title={label}
										onClick={(): void => {
											textareaRef.current && pattern && applyFormatting(pattern, textareaRef.current);
										}}
									/>
								) : (
									<span className='rc-message-box__toolbar-formatting-item' title={label} key={label}>
										<a href={link} target='_blank' rel='noopener noreferrer' className='rc-message-box__toolbar-formatting-link'>
											{label || text}
										</a>
									</span>
								),
							)}
						<MessageComposerActionsDivider />
						<AudioMessageRecorder rid={rid} tmid={tmid} disabled={!canSend || typing} />
						{/* <MessageComposerAction icon='clip' /> */}
						<MessageComposerAction
							disabled={isRecording}
							onClick={(event): void => {
								const groups = messageBox.actions.get();
								const config = {
									popoverClass: 'message-box',
									columns: [
										{
											groups: Object.entries(groups).map(([name, group]) => {
												const items = group.map((item) => ({
													icon: item.icon,
													name: t(item.label),
													type: 'messagebox-action',
													id: item.id,
													action: item.action,
												}));
												return {
													title: t.has(name) && t(name),
													items,
												};
											}),
										},
									],
									offsetVertical: 10,
									direction: 'top-inverted',
									currentTarget: event.currentTarget,
									data: {
										rid,
										tmid,
										prid: subscription?.prid,
										messageBox: textareaRef.current,
										chat,
									},
									activeElement: event.currentTarget,
								};

								popover.open(config);
							}}
							disabled={isRecording}
							icon='plus'
						/>
					</MessageComposerToolbarActions>
					<MessageComposerToolbarSubmit>
						{!canSend && (
							<Button small primary>
								{t('Join')}
							</Button>
						)}
						<MessageComposerAction icon='send' disabled={!canSend || !typing} onClick={handleSendMessage} secondary info />
					</MessageComposerToolbarSubmit>
				</MessageComposerToolbar>
			</MessageComposer>
			<UserActionIndicator rid={rid} tmid={tmid} />
		</>
	);
};

export default memo(MessageBox);
