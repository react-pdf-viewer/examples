import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface UseLastThemeExampleProps {
    fileUrl: string;
}

const UseLastThemeExample: React.FC<UseLastThemeExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const handleSwitchTheme = (theme: string) => {
        localStorage.setItem('current-theme', theme);
    };

    const theme = localStorage.getItem('current-theme') || 'light';

    return (
        <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            theme={theme}
            onSwitchTheme={handleSwitchTheme}
        />
    );
};

export default UseLastThemeExample;
