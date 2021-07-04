import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import zoomAfterFullScreen from './zoomAfterFullScreen';

interface ZoomAfterFullScreenExampleProps {
    fileUrl: string;
}

const ZoomAfterFullScreenExampleProps: React.FC<ZoomAfterFullScreenExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const zoomAfterFullScreenInstance = zoomAfterFullScreen();

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance, zoomAfterFullScreenInstance]} />
        </div>
    );
};

export default ZoomAfterFullScreenExampleProps;
