import * as React from 'react';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface ZoomToFitScreenInFullScreenModeExampleProps {
    fileUrl: string;
}

const ZoomToFitScreenInFullScreenModeExample: React.FC<ZoomToFitScreenInFullScreenModeExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                // Zoom to fit the screen after entering and exiting the full screen mode
                onEnterFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                },
                onExitFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                }, 
            },
        },
    });

    return (
        <Viewer
            fileUrl={fileUrl}
            plugins={[
                defaultLayoutPluginInstance,
            ]}
        />
    );
};

export default ZoomToFitScreenInFullScreenModeExample;