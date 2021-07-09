import * as React from 'react';
import { DocumentLoadEvent, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface OpenSidebarTabExampleProps {
    fileUrl: string;
}

const OpenSidebarTabExample: React.FC<OpenSidebarTabExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const handleDocumentLoad = (e: DocumentLoadEvent) => {
        const { activateTab } = defaultLayoutPluginInstance;

        // Activate the bookmark tab whose index is `1`
        activateTab(1);
    };

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} onDocumentLoad={handleDocumentLoad} />;
};

export default OpenSidebarTabExample;
