import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin, RenderGoToFirstPageProps, RenderGoToLastPageProps, RenderGoToNextPageProps, RenderGoToPreviousPageProps } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/styles/index.css';
import '@react-pdf-viewer/page-navigation/styles/index.css';

interface CustomizeNavigationButtonsExampleProps {
    fileUrl: string;
}

const CustomizeNavigationButtonsExample: React.FC<CustomizeNavigationButtonsExampleProps> = ({ fileUrl }) => {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { GoToFirstPage, GoToLastPage, GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;

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
                    justifyContent: 'center',
                    padding: '4px',
                }}
            >
                <div style={{ padding: '0 2px' }}>
                    <GoToFirstPage>
                    {
                        (props: RenderGoToFirstPageProps) => (
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
                                First page
                            </button>
                        )
                    }
                    </GoToFirstPage>
                </div>
                <div style={{ padding: '0 2px' }}>
                    <GoToPreviousPage>
                    {
                        (props: RenderGoToPreviousPageProps) => (
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
                <div style={{ padding: '0 2px' }}>
                    <GoToNextPage>
                    {
                        (props: RenderGoToNextPageProps) => (
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
                <div style={{ padding: '0 2px' }}>
                    <GoToLastPage>
                    {
                        (props: RenderGoToLastPageProps) => (
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
                                Last page
                            </button>
                        )
                    }
                    </GoToLastPage>
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer
                    fileUrl={fileUrl}
                    plugins={[
                        pageNavigationPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomizeNavigationButtonsExample;