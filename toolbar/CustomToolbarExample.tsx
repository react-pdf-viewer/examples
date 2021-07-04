import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { RenderGoToPageProps } from '@react-pdf-viewer/page-navigation';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface CustomToolbarExampleProps {
    fileUrl: string;
}

const CustomToolbarExample: React.FC<CustomToolbarExampleProps> = ({ fileUrl }) => {
    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    return (
        <div
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
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '4px',
                }}
            >
                <Toolbar>
                    {(props: ToolbarSlot) => {
                        const {
                            CurrentPageInput,
                            CurrentScale,
                            GoToNextPage,
                            GoToPreviousPage,
                            NumberOfPages,
                            ZoomIn,
                            ZoomOut,
                        } = props;
                        return (
                            <>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomOut>
                                        {(props: RenderZoomOutProps) => (
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
                                        )}
                                    </ZoomOut>
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <CurrentScale>
                                        {(props: RenderCurrentScaleProps) => (
                                            <span>{`${Math.round(props.scale * 100)}%`}</span>
                                        )}
                                    </CurrentScale>
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomIn>
                                        {(props: RenderZoomInProps) => (
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
                                        )}
                                    </ZoomIn>
                                </div>
                                <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <GoToPreviousPage>
                                        {(props: RenderGoToPageProps) => (
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
                                        )}
                                    </GoToPreviousPage>
                                </div>
                                <div style={{ padding: '0px 2px', width: '4rem' }}>
                                    <CurrentPageInput />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    / <NumberOfPages />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <GoToNextPage>
                                        {(props: RenderGoToPageProps) => (
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
                                        )}
                                    </GoToNextPage>
                                </div>
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
                <Viewer fileUrl={fileUrl} plugins={[toolbarPluginInstance]} />
            </div>
        </div>
    );
};

export default CustomToolbarExample;
