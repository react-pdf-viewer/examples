import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { propertiesPlugin } from '@react-pdf-viewer/properties';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/properties/lib/styles/index.css';

interface ShowPropertiesButtonExampleProps {
    fileUrl: string;
}

const ShowPropertiesButtonExample: React.FC<ShowPropertiesButtonExampleProps> = ({ fileUrl }) => {
    const propertiesPluginInstance = propertiesPlugin();
    const { ShowPropertiesButton } = propertiesPluginInstance;

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
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '4px',
                }}
            >
                <ShowPropertiesButton />
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[propertiesPluginInstance]} />
            </div>
        </div>
    );
};

export default ShowPropertiesButtonExample;
