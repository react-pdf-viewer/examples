import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

import jumpToPagePlugin from './jumpToPagePlugin';

interface JumpToGivenPageExampleProps {
    fileUrl: string;
}

const JumpToGivenPageExample: React.FC<JumpToGivenPageExampleProps> = ({ fileUrl }) => {
    const jumpToPagePluginInstance = jumpToPagePlugin();
    const { jumpToPage } = jumpToPagePluginInstance;

    return (
        <>
        <div
            style={{
                marginBottom: '16px',
            }}
        >
            <button
                style={{
                    background: 'rgba(0, 0, 0, .1)',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '16px',
                    padding: '8px',
                }}
                onClick={() => jumpToPage(1)}
            >
                Jump to page 2
            </button>
        </div>
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, .3)',
                height: '750px',
            }}
        >
            <Viewer
                fileUrl={fileUrl}
                plugins={[
                    jumpToPagePluginInstance,
                ]}
            />
        </div>
        </>
    );
};

export default JumpToGivenPageExample;