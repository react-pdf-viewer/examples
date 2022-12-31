import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as React from 'react';
import { isDocumentChangedPlugin } from './isDocumentChangedPlugin';
import { trackPositionPlugin } from './trackPositionPlugin';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface KeepScrollOffsetExampleProps {
    fileUrl: string;
}

export const KeepScrollOffsetExample: React.FC<KeepScrollOffsetExampleProps> = ({ fileUrl }) => {
    const [scale, setScale] = React.useState<number>();

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const isDocumentChangedPluginInstance = isDocumentChangedPlugin();
    const { isDocumentChanged } = isDocumentChangedPluginInstance;
    const trackPositionPluginInstance = trackPositionPlugin({
        isDocumentChanged,
        updateScale: setScale,
    });

    return (
        <Viewer
            defaultScale={scale}
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance, isDocumentChangedPluginInstance, trackPositionPluginInstance]}
        />
    );
};
