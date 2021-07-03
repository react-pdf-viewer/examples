import * as React from 'react';
import { Icon, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface AddNewTabExampleProps {
    fileUrl: string;
}

const AddNewTabExample: React.FC<AddNewTabExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: defaultTabs => defaultTabs.concat({
            content: (
                <div style={{ textAlign: 'center', width: '100%' }}>
                    Notes are listed here
                </div>
            ),
            icon: (
                <Icon size={16}>
                    <path d='M23.5,17a1,1,0,0,1-1,1h-11l-4,4V18h-6a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h21a1,1,0,0,1,1,1Z' />
                    <path d='M5.5 12L18.5 12' />
                    <path d='M5.5 7L18.5 7' />
                </Icon>
            ),
            title: <>Notes</>,
        }),
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

export default AddNewTabExample;