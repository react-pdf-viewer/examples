import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import type { ToolbarProps, ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface RemovePartsDefaultToolbarDefaultLayoutExampleProps {
    fileUrl: string;
}

const RemovePartsDefaultToolbarDefaultLayoutExample: React.FC<RemovePartsDefaultToolbarDefaultLayoutExampleProps> = ({
    fileUrl,
}) => {
    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
        ...slot,
        Download: () => <></>,
        EnterFullScreen: () => <></>,
        SwitchTheme: () => <></>,
    });

    const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    );
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar,
    });
    const { renderDefaultToolbar } = defaultLayoutPluginInstance.toolbarPluginInstance;

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default RemovePartsDefaultToolbarDefaultLayoutExample;
