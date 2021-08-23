import * as React from 'react';
import { LocalizationContext, LocalizationMap, ThemeContext, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import vi_VN from './vi_VN.json';

const LocalizationExample: React.FC<{}> = () => {
    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    const [currentTheme, setCurrentTheme] = React.useState('light');
    const [l10n, setL10n] = React.useState(vi_VN as any as LocalizationMap);

    const localizationContext = { l10n, setL10n };
    const themeContext = { currentTheme, setCurrentTheme };

    return (
        <ThemeContext.Provider value={themeContext}>
            <LocalizationContext.Provider value={localizationContext}>
                <div
                    className={`rpv-core__viewer rpv-core__viewer--${currentTheme}`}
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            backgroundColor: currentTheme === 'dark' ? '#292929' : '#eeeeee',
                            borderBottom: currentTheme === 'dark' ? '1px solid #000' : '1px solid rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            padding: '.25rem',
                        }}
                    >
                        <Toolbar />
                    </div>
                    <div
                        style={{
                            flex: 1,
                            overflow: 'hidden',
                        }}
                    >
                        <Viewer fileUrl="/assets/pdf-open-parameters.pdf" plugins={[toolbarPluginInstance]} />
                    </div>
                </div>
            </LocalizationContext.Provider>
        </ThemeContext.Provider>
    );
};

export default LocalizationExample;
