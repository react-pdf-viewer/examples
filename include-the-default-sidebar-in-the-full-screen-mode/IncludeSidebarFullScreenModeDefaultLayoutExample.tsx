import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface IncludeSidebarFullScreenModeDefaultLayoutExampleProps {
    fileUrl: string;
}

const IncludeSidebarFullScreenModeDefaultLayoutExample: React.FC<
    IncludeSidebarFullScreenModeDefaultLayoutExampleProps
> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                getFullScreenTarget: (pagesContainer) => pagesContainer.closest('[data-testid="core__viewer"]'),
                renderExitFullScreenButton: (props) => <></>,
            },
        },
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default IncludeSidebarFullScreenModeDefaultLayoutExample;
