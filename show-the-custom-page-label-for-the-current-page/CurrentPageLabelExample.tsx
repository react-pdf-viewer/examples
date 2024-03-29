import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import type { RenderCurrentPageLabelProps } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

interface CurrentPageLabelExampleProps {
    fileUrl: string;
}

const CurrentPageLabelExample: React.FC<CurrentPageLabelExampleProps> = ({ fileUrl }) => {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageLabel } = pageNavigationPluginInstance;

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
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <CurrentPageLabel>
                    {(props: RenderCurrentPageLabelProps) => (
                        <>
                            {`${props.currentPage + 1} ${
                                props.pageLabel === `${props.currentPage + 1}` ? '' : ` (${props.pageLabel})`
                            } of ${props.numberOfPages}`}
                        </>
                    )}
                </CurrentPageLabel>
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

export default CurrentPageLabelExample;
