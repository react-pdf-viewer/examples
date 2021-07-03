import React, { ReactElement } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, ToolbarProps, ToolbarSlot } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const CustomToolbarExample: React.FC<{}> = () => {
    const renderToolbar = (Toolbar: ((props: ToolbarProps) => ReactElement)) => (
        <Toolbar>
        {
            (slots: ToolbarSlot) => {
                const {
                    CurrentPageInput, CurrentScale, GoToNextPage, GoToPreviousPage,
                    NumberOfPages, ZoomIn, ZoomOut,
                } = slots;
                return (
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <div style={{ padding: '0px 2px' }}>
                            <ZoomOut>
                            {
                                (props) => (
                                    <button
                                        style={{
                                            backgroundColor: '#357edd',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: '#ffffff',
                                            cursor: 'pointer',
                                            padding: '8px',
                                        }}
                                        onClick={props.onClick}
                                    >
                                        Zoom out
                                    </button>
                                )
                            }
                            </ZoomOut>
                        </div>
                        <div style={{ padding: '0px 2px' }}>
                            <CurrentScale>
                            {
                                (props) => (
                                    <span>{`${Math.round(props.scale * 100)}%`}</span>
                                )
                            }
                            </CurrentScale>
                        </div>
                        <div style={{ padding: '0px 2px' }}>
                            <ZoomIn>
                            {
                                (props) => (
                                    <button
                                        style={{
                                            backgroundColor: '#357edd',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: '#ffffff',
                                            cursor: 'pointer',
                                            padding: '8px',
                                        }}
                                        onClick={props.onClick}
                                    >
                                        Zoom in
                                    </button>
                                )
                            }
                            </ZoomIn>
                        </div>
                        <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                            <GoToPreviousPage>
                            {
                                (props) => (
                                    <button
                                        style={{
                                            backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: '#ffffff',
                                            cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                                            padding: '8px',
                                        }}
                                        disabled={props.isDisabled}
                                        onClick={props.onClick}
                                    >
                                        Previous page
                                    </button>
                                )
                            }
                            </GoToPreviousPage>
                        </div>
                        <div style={{ padding: '0px 2px', width: '4rem' }}>
                            <CurrentPageInput />
                        </div>
                        <div style={{ padding: '0px 2px' }}>/ <NumberOfPages /></div>
                        <div style={{ padding: '0px 2px' }}>
                            <GoToNextPage>
                            {
                                (props) => (
                                    <button
                                        style={{
                                            backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: '#ffffff',
                                            cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                                            padding: '8px',
                                        }}
                                        disabled={props.isDisabled}
                                        onClick={props.onClick}
                                    >
                                        Next page
                                    </button>
                                )
                            }
                            </GoToNextPage>
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
        <div
            style={{
                height: '100%',
            }}
        >
            <Viewer
                fileUrl='/assets/pdf-open-parameters.pdf'
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    );
};

export default CustomToolbarExample;