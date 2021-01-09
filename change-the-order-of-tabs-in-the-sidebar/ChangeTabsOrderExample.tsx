import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface ChangeTabsOrderExampleProps {
    fileUrl: string;
}

const ChangeTabsOrderExample: React.FC<ChangeTabsOrderExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: defaultTabs => [
            defaultTabs[1], // Bookmarks tab
            defaultTabs[0], // Thumbnails tab
            defaultTabs[2], // Attachments tab
        ],
    });

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <Viewer
                fileUrl={fileUrl}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    );
};

export default ChangeTabsOrderExample;