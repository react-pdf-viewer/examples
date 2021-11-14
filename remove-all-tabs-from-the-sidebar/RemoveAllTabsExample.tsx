import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface RemoveAllTabsExampleProps {
    fileUrl: string;
}

const RemoveAllTabsExample: React.FC<RemoveAllTabsExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default RemoveAllTabsExample;
