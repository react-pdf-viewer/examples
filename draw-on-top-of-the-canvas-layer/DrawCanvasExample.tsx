import React from 'react';
import { CanvasLayerRenderEvent, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface DrawCanvasExampleProps {
    fileUrl: string;
}

const DrawCanvasExample: React.FC<DrawCanvasExampleProps> = ({ fileUrl }) => {
    const message = "customer@email.com";

    const onCanvasLayerRender = (e: CanvasLayerRenderEvent) => {
        // `e.ele` is the canvas element
        const canvas = e.ele;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const fonts = ctx.font.split(' ');
        const fontSize = parseInt(fonts[0], 10);

        ctx.textAlign = 'center';
        ctx.font = `${fontSize * e.scale * 4}px ${fonts[1]}`;

        ctx.fillStyle = '#CCC';
        ctx.fillText(message, centerX, 100);
    };

    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
            <Viewer
                fileUrl={fileUrl}
                onCanvasLayerRender={onCanvasLayerRender}
            />
        </div>
    );
};

export default DrawCanvasExample;
