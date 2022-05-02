import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomWidthDefaultLayoutExampleProps {
    fileUrl: string;
}

const CustomWidthDefaultLayoutExample: React.FC<CustomWidthDefaultLayoutExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        thumbnailPlugin: {
            thumbnailWidth: 150,
        },
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default CustomWidthDefaultLayoutExample;
