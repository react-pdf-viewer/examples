import { SpecialZoomLevel } from '@react-pdf-viewer/core';

export default interface StoreProps {
    zoom?(scale: number | SpecialZoomLevel): void;
}
