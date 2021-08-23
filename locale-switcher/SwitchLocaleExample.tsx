import * as React from 'react';
import { LocalizationContext, LocalizationMap, Viewer } from '@react-pdf-viewer/core';
import { localeSwitcherPlugin } from '@react-pdf-viewer/locale-switcher';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import vi_VN from './vi_VN.json';

interface SwitchLocaleExampleProps {
    fileUrl: string;
}

const SwitchLocaleExample: React.FC<SwitchLocaleExampleProps> = ({ fileUrl }) => {
    const localeSwitcherPluginInstance = localeSwitcherPlugin();
    const toolbarPluginInstance = toolbarPlugin();

    const { LocalePopover } = localeSwitcherPluginInstance;
    const { Toolbar } = toolbarPluginInstance;

    const [locale, setLocale] = React.useState('en_US');
    const [l10n, setL10n] = React.useState<LocalizationMap>();
    const localizationContext = { l10n, setL10n };

    const localizations = {
        en_US: null,
        vi_VN: vi_VN as any as LocalizationMap,
    };

    const switchToLocalization = (loc: string) => {
        setL10n(localizations[loc]);
        setLocale(loc);
    };

    return (
        <LocalizationContext.Provider value={localizationContext}>
            <div
                className="rpv-core__viewer"
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
                        backgroundColor: '#eeeeee',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        padding: '4px',
                    }}
                >
                    <Toolbar>
                        {(props: ToolbarSlot) => {
                            const {
                                CurrentPageInput,
                                Download,
                                EnterFullScreen,
                                GoToNextPage,
                                GoToPreviousPage,
                                NumberOfPages,
                                Open,
                                Print,
                                ShowProperties,
                                ShowSearchPopover,
                                Zoom,
                                ZoomIn,
                                ZoomOut,
                            } = props;
                            return (
                                <>
                                    <>
                                        <div style={{ padding: '0px 2px' }}>
                                            <ShowSearchPopover />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <GoToPreviousPage />
                                        </div>
                                        <div
                                            style={{
                                                padding: '0px 2px',
                                                width: '4rem',
                                            }}
                                        >
                                            <CurrentPageInput />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            / <NumberOfPages />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <GoToNextPage />
                                        </div>
                                        <div
                                            style={{
                                                padding: '0px 2px',
                                                marginLeft: 'auto',
                                            }}
                                        >
                                            <ZoomOut />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <Zoom />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <ZoomIn />
                                        </div>
                                        <div
                                            style={{
                                                padding: '0px 2px',
                                                marginLeft: 'auto',
                                            }}
                                        >
                                            <EnterFullScreen />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <Open />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <Download />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <Print />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <ShowProperties />
                                        </div>
                                        <div style={{ padding: '0px 2px' }}>
                                            <LocalePopover
                                                initialLocale={locale}
                                                locales={{
                                                    en_US: 'English',
                                                    vi_VN: 'Tiếng Việt',
                                                }}
                                                localizations={localizations}
                                                onUpdateLocalization={switchToLocalization}
                                            />
                                        </div>
                                    </>
                                </>
                            );
                        }}
                    </Toolbar>
                </div>
                <div
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Viewer fileUrl={fileUrl} plugins={[localeSwitcherPluginInstance, toolbarPluginInstance]} />
                </div>
            </div>
        </LocalizationContext.Provider>
    );
};

export default SwitchLocaleExample;
