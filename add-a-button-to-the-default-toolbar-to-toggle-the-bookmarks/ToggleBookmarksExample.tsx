import * as React from 'react';
import { Icon, MinimalButton, Position, Tooltip, Viewer } from '@react-pdf-viewer/core';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/bookmark/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface ToggleBookmarksExampleProps {
    fileUrl: string;
}

const TOOLTIP_OFFSET = { left: 8, top: 0 };

const ToggleBookmarksExample: React.FC<ToggleBookmarksExampleProps> = ({ fileUrl }) => {
    const [sidebarOpened, setSidebarOpened] = React.useState(false);
    const bookmarkPluginInstance = bookmarkPlugin();
    const toolbarPluginInstance = toolbarPlugin();

    const { Toolbar } = toolbarPluginInstance;
    const { Bookmarks } = bookmarkPluginInstance;

    return (
        <div
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
                    padding: '4px',
                }}
            >
                <div style={{ marginRight: '0.25rem' }}>
                    <Tooltip
                        position={Position.BottomLeft}
                        target={
                            <MinimalButton
                                ariaLabel="Toggle the bookmarks"
                                isSelected={sidebarOpened}
                                onClick={() => setSidebarOpened((opened) => !opened)}
                            >
                                <Icon size={16}>
                                    <rect x="0.5" y="0.497" width="22" height="22" rx="1" ry="1" />
                                    <line x1="7.5" y1="0.497" x2="7.5" y2="22.497" />
                                </Icon>
                            </MinimalButton>
                        }
                        content={() => 'Toggle the bookmarks'}
                        offset={TOOLTIP_OFFSET}
                    />
                </div>
                <Toolbar />
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
                        borderRight: sidebarOpened ? '1px solid rgba(0, 0, 0, 0.3)' : 'none',
                        overflow: 'auto',
                        transition: 'width 400ms ease-in-out',
                        width: sidebarOpened ? '30%' : '0%',
                    }}
                >
                    <Bookmarks />
                </div>
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <Viewer fileUrl={fileUrl} plugins={[bookmarkPluginInstance, toolbarPluginInstance]} />
                </div>
            </div>
        </div>
    );
};

export default ToggleBookmarksExample;
