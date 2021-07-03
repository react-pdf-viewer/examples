import React, { ReactElement } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, ToolbarProps, ToolbarSlot } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ToolbarSlotsExample: React.FC<{}> = () => {
    const renderToolbar = (Toolbar: ((props: ToolbarProps) => ReactElement)) => (
        <Toolbar>
            {
                (slots: ToolbarSlot) => {
                    const {
                        CurrentPageInput, Download, EnterFullScreen, GoToNextPage, GoToPreviousPage,
                        NumberOfPages, Print, ShowSearchPopover, Zoom, ZoomIn,
                        ZoomOut,
                    } = slots;
                    return (
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                            }}
                        >
                            <div style={{ padding: '0px 2px' }}>
                                <ShowSearchPopover />
                            </div>
                            <div style={{ padding: '0px 2px' }}>
                                <ZoomOut />
                            </div>
                            <div style={{ padding: '0px 2px' }}>
                                <Zoom />
                            </div>
                            <div style={{ padding: '0px 2px' }}>
                                <ZoomIn />
                            </div>
                            <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                <GoToPreviousPage />
                            </div>
                            <div style={{ padding: '0px 2px', width: '4rem' }}>
                                <CurrentPageInput />
                            </div>
                            <div style={{ padding: '0px 2px' }}>/ <NumberOfPages /></div>
                            <div style={{ padding: '0px 2px' }}>
                                <GoToNextPage />
                            </div>
                            <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                <EnterFullScreen />
                            </div>
                            <div style={{ padding: '0px 2px' }}>
                                <Download />
                            </div>
                            <div style={{ padding: '0px 2px' }}>
                                <Print />
                            </div>
                        </div>
                    )
                }
            }
        </Toolbar>
    );

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar,
    });

    return (
        <Viewer
            fileUrl='/assets/pdf-open-parameters.pdf'
            plugins={[
                defaultLayoutPluginInstance,
            ]}
        />
    );
};

export default ToolbarSlotsExample;