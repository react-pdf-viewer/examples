import * as React from 'react';
import { attachmentPlugin } from '@react-pdf-viewer/attachment';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/attachment/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface AttachmentExampleProps {
    fileUrl: string;
}

const AttachmentExample: React.FC<AttachmentExampleProps> = ({ fileUrl }) => {
    // Create new instance of attachment plugin
    const attachmentPluginInstance = attachmentPlugin();

    const { Attachments } = attachmentPluginInstance;

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                height: '100%',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                    overflow: 'auto',
                    width: '30%',
                }}
            >
                <Attachments />
            </div>
            <div style={{ flex: 1 }}>
                <Viewer fileUrl={fileUrl} plugins={[attachmentPluginInstance]} />
            </div>
        </div>
    );
};

export default AttachmentExample;
