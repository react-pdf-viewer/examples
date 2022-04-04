import * as React from 'react';
import { PrimaryButton, RotateDirection, Viewer } from '@react-pdf-viewer/core';
import { rotatePlugin } from '@react-pdf-viewer/rotate';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';

interface RotatePageWithThumbnailsExampleProps {
    fileUrl: string;
}

const RotatePageWithThumbnailsExample: React.FC<RotatePageWithThumbnailsExampleProps> = ({ fileUrl }) => {
    const rotatePluginInstance = rotatePlugin();
    const { RotatePage } = rotatePluginInstance;

    const thumbnailPluginInstance = thumbnailPlugin();
    const { Thumbnails } = thumbnailPluginInstance;

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
                <div style={{ padding: '0 0.25rem' }}>
                    <RotatePage>
                        {(props) => (
                            <PrimaryButton onClick={() => props.onRotatePage(0, RotateDirection.Forward)}>
                                Rotate the first page forward
                            </PrimaryButton>
                        )}
                    </RotatePage>
                </div>
                <div style={{ padding: '0 0.25rem' }}>
                    <RotatePage>
                        {(props) => (
                            <PrimaryButton onClick={() => props.onRotatePage(0, RotateDirection.Backward)}>
                                Rotate the first page backward
                            </PrimaryButton>
                        )}
                    </RotatePage>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        borderRight: '1px solid rgba(0, 0, 0, 0.1)',
                        width: '20%',
                    }}
                >
                    <Thumbnails />
                </div>
                <div
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Viewer
                        defaultScale={0.5}
                        fileUrl={fileUrl}
                        plugins={[rotatePluginInstance, thumbnailPluginInstance]}
                    />
                </div>
            </div>
        </div>
    );
};

export default RotatePageWithThumbnailsExample;
