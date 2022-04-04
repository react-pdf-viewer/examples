import * as React from 'react';
import { MinimalButton, Position, RotateDirection, Tooltip, Viewer } from '@react-pdf-viewer/core';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';
import { RotateBackwardIcon, RotateForwardIcon } from '@react-pdf-viewer/rotate';
import type { RenderThumbnailItemProps } from '@react-pdf-viewer/thumbnail';

const TOOLTIP_OFFSET = { left: 0, top: 8 };

interface RotateSingleThumbnailExampleProps {
    fileUrl: string;
}

const RotateSingleThumbnailExample: React.FC<RotateSingleThumbnailExampleProps> = ({ fileUrl }) => {
    const renderThumbnailItem = (props: RenderThumbnailItemProps) => (
        <div
            key={props.key}
            data-testid={`thumbnail-${props.pageIndex}`}
            style={{
                backgroundColor: props.pageIndex === props.currentPage ? 'rgba(0, 0, 0, 0.3)' : '#fff',
                cursor: 'pointer',
                padding: '0.5rem',
                width: '100%',
            }}
        >
            <div style={{ marginBottom: '0.5rem' }} onClick={props.onJumpToPage}>
                {props.renderPageThumbnail}
            </div>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 auto',
                    width: '100px',
                }}
            >
                <Tooltip
                    position={Position.BottomCenter}
                    target={
                        <MinimalButton onClick={() => props.onRotatePage(RotateDirection.Forward)}>
                            <RotateForwardIcon />
                        </MinimalButton>
                    }
                    content={() => 'Rotate clockwise'}
                    offset={TOOLTIP_OFFSET}
                />
                <Tooltip
                    position={Position.BottomCenter}
                    target={
                        <MinimalButton onClick={() => props.onRotatePage(RotateDirection.Backward)}>
                            <RotateBackwardIcon />
                        </MinimalButton>
                    }
                    content={() => 'Rotate counterclockwise'}
                    offset={TOOLTIP_OFFSET}
                />
            </div>
        </div>
    );

    const thumbnailPluginInstance = thumbnailPlugin();
    const { Thumbnails } = thumbnailPluginInstance;

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                height: '100%',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
                    width: '20%',
                }}
            >
                <Thumbnails renderThumbnailItem={renderThumbnailItem} />
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer defaultScale={0.5} fileUrl={fileUrl} plugins={[thumbnailPluginInstance]} />
            </div>
        </div>
    );
};

export default RotateSingleThumbnailExample;
