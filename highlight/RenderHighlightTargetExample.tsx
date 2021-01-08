import React from 'react';
import { highlightPlugin, MessageIcon, RenderHighlightTargetProps } from '@react-pdf-viewer/highlight';
import { Button, Position, Tooltip, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface RenderHighlightTargetExampleProps {
    fileUrl: string;
}

const RenderHighlightTargetExample: React.FC<RenderHighlightTargetExampleProps> = ({ fileUrl }) => {
    const renderHighlightTarget = (props: RenderHighlightTargetProps) => (
        <div
            style={{
                background: '#eee',
                display: 'flex',
                position: 'absolute',
                left: `${props.selectionRegion.left}%`,
                top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
                transform: 'translate(0, 8px)',
            }}
        >
            <Tooltip
                position={Position.TopCenter}
                target={<Button onClick={props.toggle}><MessageIcon /></Button>}
                content={() => <div style={{ width: '100px' }}>Add a note</div>}
                offset={{ left: 0, top: -8 }}
            />
        </div>
    );

    const highlightPluginInstance = highlightPlugin({
        renderHighlightTarget,
    });

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <Viewer
                fileUrl={fileUrl}
                plugins={[
                    highlightPluginInstance,
                ]}
            />
        </div>
    );
};

export default RenderHighlightTargetExample;