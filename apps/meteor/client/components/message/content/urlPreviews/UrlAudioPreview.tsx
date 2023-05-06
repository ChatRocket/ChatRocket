import { AudioPlayer } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import React from 'react';

import type { UrlPreviewMetadata } from './UrlPreviewMetadata';

type UrlAudioPreviewProps = Pick<UrlPreviewMetadata, 'url'>;

const UrlAudioPreview = ({ url }: UrlAudioPreviewProps): ReactElement => <AudioPlayer src={getURL(url)} />;

export default UrlAudioPreview;
