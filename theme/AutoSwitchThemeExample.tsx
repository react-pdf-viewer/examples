import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface AutoSwitchThemeExampleProps {
    fileUrl: string;
}

const AutoSwitchThemeExample: React.FC<AutoSwitchThemeExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} theme="auto" />;
};

export default AutoSwitchThemeExample;
