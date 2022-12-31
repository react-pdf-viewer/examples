import { Offset } from '@react-pdf-viewer/core';

export interface StoreProps {
    getPagesContainer?(): HTMLElement;
    offset?: Offset;
}
