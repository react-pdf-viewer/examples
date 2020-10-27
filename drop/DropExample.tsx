import React from 'react';
import { dropPlugin } from '@react-pdf-viewer/drop';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/drop/lib/styles/index.css';

interface DropExampleProps {
    fileUrl: string;
}

const DropExample: React.FC<DropExampleProps> = ({ fileUrl }) => {
    const dropPluginInstance = dropPlugin();

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                height: '750px',
            }}
        >
            <Viewer
                fileUrl={fileUrl}
                plugins={[
                    dropPluginInstance,
                ]}
            />
        </div>
    );
};

export default DropExample;