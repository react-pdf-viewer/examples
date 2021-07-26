import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';

interface UseLastThemeExampleProps {
    fileUrl: string;
}

const UseLastThemeExample: React.FC<UseLastThemeExampleProps> = ({ fileUrl }) => {
    const handleSwitchTheme = (theme: string) => {
        localStorage.setItem('current-theme', theme);
    };

    const theme =
        typeof localStorage !== 'undefined' && localStorage.getItem('current-theme')
            ? localStorage.getItem('current-theme')
            : '';

    return <Viewer fileUrl={fileUrl} theme={theme} onSwitchTheme={handleSwitchTheme} />;
};

export default UseLastThemeExample;
