import * as React from 'react';
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
        <Viewer
            fileUrl={fileUrl}
            plugins={[
                dropPluginInstance,
            ]}
        />
    );
};

export default DropExample;