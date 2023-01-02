import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as React from 'react';
import { trackScalePlugin } from './trackScalePlugin';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface KeepScaleLevelExampleProps {
    fileUrl: string;
}

export const KeepScaleLevelExample: React.FC<KeepScaleLevelExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const trackScalePluginInstance = trackScalePlugin({
        initialScale: 0.5,
    });
    const { scale } = trackScalePluginInstance;

    return (
        <Viewer
            defaultScale={scale}
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance, trackScalePluginInstance]}
        />
    );
};
