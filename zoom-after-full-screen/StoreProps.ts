import { SpecialZoomLevel } from '@react-pdf-viewer/core';

export default interface StoreProps {
    getPagesContainer?(): HTMLElement;
    zoom?(scale: number | SpecialZoomLevel): void;
}
