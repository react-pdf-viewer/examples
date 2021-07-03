import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface RemoveTabExampleProps {
    fileUrl: string;
}

const RemoveTabExample: React.FC<RemoveTabExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: defaultTabs => [
            // Remove the attachments tab (`defaultTabs[2]`)
            defaultTabs[0], // Bookmarks tab
            defaultTabs[1], // Thumbnails tab
        ],
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

export default RemoveTabExample;