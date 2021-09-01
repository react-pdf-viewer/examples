import * as React from 'react';
import { ThemeContext, Viewer } from '@react-pdf-viewer/core';
import { themePlugin } from '@react-pdf-viewer/theme';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface SwitchThemeButtonExampleProps {
    fileUrl: string;
}

const SwitchThemeButtonExample: React.FC<SwitchThemeButtonExampleProps> = ({ fileUrl }) => {
    const themePluginInstance = themePlugin();
    const { SwitchThemeButton } = themePluginInstance;

    const [currentTheme, setCurrentTheme] = React.useState('light');
    const themeContext = { currentTheme, setCurrentTheme };

    return (
        <ThemeContext.Provider value={themeContext}>
            <div
                className={`rpv-core__viewer rpv-core__viewer--${currentTheme}`}
                style={{
                    borderColor: currentTheme === 'dark' ? '#454647' : 'rgba(0, 0, 0, 0.3)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        backgroundColor: currentTheme === 'dark' ? '#292929' : '#eee',
                        borderBottomColor: currentTheme === 'dark' ? '#000' : 'rgba(0, 0, 0, 0.1)',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '1px',
                        display: 'flex',
                        padding: '.25rem',
                    }}
                >
                    <SwitchThemeButton />
                </div>
                <div
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Viewer
                        defaultScale={0.75}
                        fileUrl={fileUrl}
                        plugins={[themePluginInstance]}
                        theme={currentTheme}
                    />
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default SwitchThemeButtonExample;
