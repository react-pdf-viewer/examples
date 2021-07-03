import * as React from 'react';
import { OpenFile, Viewer } from '@react-pdf-viewer/core';
import { SelectionMode } from '@react-pdf-viewer/selection-mode';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface ToolbarOptionsExampleProps {
    fileUrl: string;
}

const ToolbarOptionsExample: React.FC<ToolbarOptionsExampleProps> = ({ fileUrl }) => {
    const toolbarPluginInstance = toolbarPlugin({
        getFilePlugin: {
            fileNameGenerator: (file: OpenFile) => {
                // `file.name` is the URL of opened file
                const fileName = file.name.substring(file.name.lastIndexOf('/') + 1);
                return `a-copy-of-${fileName}`;
            }
        },
        searchPlugin: {
            keyword: 'PDF'
        },
        selectionModePlugin: {
            selectionMode: SelectionMode.Hand
        },
    });
    const { Toolbar } = toolbarPluginInstance;

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
                <Toolbar />
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
                        toolbarPluginInstance,
                    ]}
                />
            </div>
        </div>
    );
};

export default ToolbarOptionsExample;