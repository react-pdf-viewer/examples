import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

interface CustomizeZoomLevelsExampleProps {
    fileUrl: string;
}

const CustomizeZoomLevelsExample: React.FC<CustomizeZoomLevelsExampleProps> = ({ fileUrl }) => {
    const zoomPluginInstance = zoomPlugin();
    const { Zoom } = zoomPluginInstance;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    borderBottom: '1px solid rgba(0, 0, 0, .3)',
                    padding: '0.25rem 0',
                    justifyContent: 'center',
                }}
            >
                <Zoom levels={[0.4, 0.8, 1.2, 1.6, 2.4, 3.2]} />
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[zoomPluginInstance]} />
            </div>
        </div>
    );
};

export default CustomizeZoomLevelsExample;
