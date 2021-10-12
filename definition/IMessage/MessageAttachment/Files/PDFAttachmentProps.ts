
import { MessageAttachmentBase } from '../MessageAttachmentBase';
import { FileAttachmentProps } from './FileAttachmentProps';
import { FileProp } from './FileProp';

export type PDFAttachmentProps = {
	file: FileProp;
} & MessageAttachmentBase;

export const isFilePDFAttachment = (
	attachment: FileAttachmentProps,
): attachment is PDFAttachmentProps & { type: 'file' } => attachment?.file?.type.endsWith('pdf') ?? false;
