import * as React from 'react';
import { Icon, MinimalButton, Position, Tooltip, Viewer } from '@react-pdf-viewer/core';
import { NextIcon, PreviousIcon, RenderSearchProps, searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';

interface SetTargetPagesExampleProps {
    fileUrl: string;
}

const SetTargetPagesExample: React.FC<SetTargetPagesExampleProps> = ({ fileUrl }) => {
    const searchPluginInstance = searchPlugin();
    const { setTargetPages, Search } = searchPluginInstance;

    // Only search in the even pages
    setTargetPages((pageFilter) => pageFilter.pageIndex % 2 === 0);

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
            <Search>
                {(renderSearchProps: RenderSearchProps) => (
                    <div
                        style={{
                            alignItems: 'center',
                            backgroundColor: '#eeeeee',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            padding: '0.5rem',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                padding: '0 0.25rem',
                            }}
                        >
                            <input
                                style={{
                                    border: 'none',
                                    width: '200px',
                                }}
                                placeholder="Enter to search"
                                type="text"
                                value={renderSearchProps.keyword}
                                onChange={(e) => {
                                    renderSearchProps.setKeyword(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && renderSearchProps.keyword) {
                                        renderSearchProps.search();
                                    }
                                }}
                            />
                            <Tooltip
                                position={Position.BottomCenter}
                                target={
                                    <button
                                        style={{
                                            background: '#fff',
                                            border: 'none',
                                            borderBottom: `2px solid ${
                                                renderSearchProps.matchCase ? 'blue' : 'transparent'
                                            }`,
                                            cursor: 'pointer',
                                            height: '100%',
                                            padding: '0 0.25rem',
                                        }}
                                        onClick={() => {
                                            renderSearchProps.changeMatchCase(!renderSearchProps.matchCase);
                                        }}
                                    >
                                        <Icon>
                                            <path d="M15.979,21.725,9.453,2.612a.5.5,0,0,0-.946,0L2,21.725" />
                                            <path d="M4.383 14.725L13.59 14.725" />
                                            <path d="M0.5 21.725L3.52 21.725" />
                                            <path d="M14.479 21.725L17.5 21.725" />
                                            <path d="M22.5,21.725,18.377,9.647a.5.5,0,0,0-.946,0l-1.888,5.543" />
                                            <path d="M16.92 16.725L20.794 16.725" />
                                            <path d="M21.516 21.725L23.5 21.725" />
                                        </Icon>
                                    </button>
                                }
                                content={() => 'Match case'}
                                offset={{ left: 0, top: 8 }}
                            />
                            <Tooltip
                                position={Position.BottomCenter}
                                target={
                                    <button
                                        style={{
                                            background: '#fff',
                                            border: 'none',
                                            borderBottom: `2px solid ${
                                                renderSearchProps.wholeWords ? 'blue' : 'transparent'
                                            }`,
                                            cursor: 'pointer',
                                            height: '100%',
                                            padding: '0 0.25rem',
                                        }}
                                        onClick={() => {
                                            renderSearchProps.changeWholeWords(!renderSearchProps.wholeWords);
                                        }}
                                    >
                                        <Icon>
                                            <path d="M0.500 7.498 L23.500 7.498 L23.500 16.498 L0.500 16.498 Z" />
                                            <path d="M3.5 9.498L3.5 14.498" />
                                        </Icon>
                                    </button>
                                }
                                content={() => 'Match whole word'}
                                offset={{ left: 0, top: 8 }}
                            />
                        </div>
                        <div style={{ padding: '0 2px' }}>
                            <Tooltip
                                position={Position.BottomCenter}
                                target={
                                    <MinimalButton onClick={renderSearchProps.jumpToPreviousMatch}>
                                        <PreviousIcon />
                                    </MinimalButton>
                                }
                                content={() => 'Previous match'}
                                offset={{ left: 0, top: 8 }}
                            />
                        </div>
                        <div style={{ padding: '0 2px' }}>
                            <Tooltip
                                position={Position.BottomCenter}
                                target={
                                    <MinimalButton onClick={renderSearchProps.jumpToNextMatch}>
                                        <NextIcon />
                                    </MinimalButton>
                                }
                                content={() => 'Next match'}
                                offset={{ left: 0, top: 8 }}
                            />
                        </div>
                    </div>
                )}
            </Search>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[searchPluginInstance]} />
            </div>
        </div>
    );
};

export default SetTargetPagesExample;
