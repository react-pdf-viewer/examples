import * as React from 'react';
import { LayerRenderStatus, Plugin, PluginOnCanvasLayerRender, Viewer } from '@react-pdf-viewer/core';

interface DrawCanvasExampleProps {
    fileUrl: string;
}

const DrawCanvasExample: React.FC<DrawCanvasExampleProps> = ({ fileUrl }) => {
    const message = "customer@email.com";

    const customCanvasPlugin = (): Plugin => {
        const onCanvasLayerRender = (e: PluginOnCanvasLayerRender) => {
            // Return if the canvas isn't rendered completely
            if (e.status !== LayerRenderStatus.DidRender) {
                return;
            }

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

        return {
            onCanvasLayerRender,
        };
    };

    const customCanvasPluginInstance = customCanvasPlugin();

    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
            <Viewer
                fileUrl={fileUrl}
                plugins={[
                    customCanvasPluginInstance,
                ]}
            />
        </div>
    );
};

export default DrawCanvasExample;
