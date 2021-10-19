import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import type { ToolbarProps, ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomizeZoomLevelsDefaultLayoutExampleProps {
    fileUrl: string;
}

const CustomizeZoomLevelsDefaultLayoutExample: React.FC<CustomizeZoomLevelsDefaultLayoutExampleProps> = ({
    fileUrl,
}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar: (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
            <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        ),
    });

    const { renderDefaultToolbar } = defaultLayoutPluginInstance.toolbarPluginInstance;

    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => {
        const { Zoom } = slot;
        return Object.assign({}, slot, {
            Zoom: () => <Zoom levels={[0.4, 0.8, 1.2, 1.6, 2.4, 3.2]} />,
        });
    };

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default CustomizeZoomLevelsDefaultLayoutExample;
