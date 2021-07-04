import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

interface PageNavigationButtonsExampleProps {
    fileUrl: string;
}

const PageNavigationButtonsExample: React.FC<PageNavigationButtonsExampleProps> = ({ fileUrl }) => {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageInput, GoToFirstPageButton, GoToLastPageButton, GoToNextPageButton, GoToPreviousPage } =
        pageNavigationPluginInstance;

    return (
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
                    justifyContent: 'center',
                    padding: '4px',
                }}
            >
                <div style={{ padding: '0px 2px' }}>
                    <GoToFirstPageButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <GoToPreviousPage />
                </div>
                <div style={{ padding: '0px 2px', width: '4rem' }}>
                    <CurrentPageInput />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <GoToNextPageButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <GoToLastPageButton />
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[pageNavigationPluginInstance]} />
            </div>
        </div>
    );
};

export default PageNavigationButtonsExample;
