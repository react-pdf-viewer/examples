import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';

interface HighlightMultipleKeywordsExampleProps {
    fileUrl: string;
}

const HighlightMultipleKeywordsExample: React.FC<HighlightMultipleKeywordsExampleProps> = ({ fileUrl }) => {
    const searchPluginInstance = searchPlugin({
        keyword: ['document', 'PDF'],
    });
    const { ShowSearchPopoverButton } = searchPluginInstance;

    return (
        <div
            className='rpv-core__viewer'
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
                <ShowSearchPopoverButton />
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
                        searchPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default HighlightMultipleKeywordsExample;