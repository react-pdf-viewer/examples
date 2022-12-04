import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import type { PageLayout } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface AddMarginExampleProps {
    fileUrl: string;
}

const AddMarginExample: React.FC<AddMarginExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const pageLayout: PageLayout = {
        buildPageStyles: () => ({
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
        }),
        tranformSize: ({ size }) => ({ height: size.height + 30, width: size.width + 30 }),
    };

    return <Viewer fileUrl={fileUrl} pageLayout={pageLayout} plugins={[defaultLayoutPluginInstance]} />;
};

export default AddMarginExample;
