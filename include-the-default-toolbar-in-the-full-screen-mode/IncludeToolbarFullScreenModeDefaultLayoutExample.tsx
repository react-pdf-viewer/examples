import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface IncludeToolbarFullScreenModeDefaultLayoutExampleProps {
    fileUrl: string;
}

const IncludeToolbarFullScreenModeDefaultLayoutExample: React.FC<
    IncludeToolbarFullScreenModeDefaultLayoutExampleProps
> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                getFullScreenTarget: (pagesContainer) => pagesContainer.closest('[data-testid="default-layout__body"]'),
                renderExitFullScreenButton: (props) => <></>,
            },
        },
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default IncludeToolbarFullScreenModeDefaultLayoutExample;
