import React from 'react';
import { highlightPlugin, HighlightArea, MessageIcon, RenderHighlightContentProps, RenderHighlightsProps, RenderHighlightTargetProps } from '@react-pdf-viewer/highlight';
import { Button, Position, PrimaryButton, Tooltip, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface RenderHighlightsExampleProps {
    fileUrl: string;
}

interface Note {
    id: number;
    content: string;
    highlightAreas: HighlightArea[];
    quote: string;
}

const RenderHighlightsExample: React.FC<RenderHighlightsExampleProps> = ({ fileUrl }) => {
    const [message, setMessage] = React.useState('');
    const [notes, setNotes] = React.useState<Note[]>([]);
    let noteId = notes.length;

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

    const renderHighlightContent = (props: RenderHighlightContentProps) => {
        const addNote = () => {
            if (message !== '') {
                const note: Note = {
                    id: ++noteId,
                    content: message,
                    highlightAreas: props.highlightAreas,
                    quote: props.selectedText,
                };
                setNotes(notes.concat([note]));
                props.cancel();
            }
        };

        return (
            <div
                style={{
                    background: '#fff',
                    border: '1px solid rgba(0, 0, 0, .3)',
                    borderRadius: '2px',
                    padding: '8px',
                    position: 'absolute',
                    left: `${props.selectionRegion.left}%`,
                    top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
                    zIndex: 1,
                }}
            >
                <div>
                    <textarea
                        rows={3}
                        style={{
                            border: '1px solid rgba(0, 0, 0, .3)',
                        }}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginTop: '8px',
                    }}
                >
                    <div style={{ marginRight: '8px' }}>
                        <PrimaryButton onClick={addNote}>Add</PrimaryButton>
                    </div>
                    <Button onClick={props.cancel}>Cancel</Button>
                </div>
            </div>
        );
    };

    const renderHighlights = (props: RenderHighlightsProps) => (
        <div>
        {
            notes.map(note => (
                <React.Fragment key={note.id}>
                {
                    note.highlightAreas
                        .filter(area => area.pageIndex === props.pageIndex)
                        .map((area, idx) => (
                            <div
                                key={idx}
                                style={
                                    Object.assign({}, {
                                        background: 'yellow',
                                        opacity: 0.4,
                                    }, props.getCssProperties(area, props.rotation))
                                }
                            />
                        ))
                }
                </React.Fragment>
            ))
        }
        </div>
    );

    const highlightPluginInstance = highlightPlugin({
        renderHighlightTarget,
        renderHighlightContent,
        renderHighlights,
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

export default RenderHighlightsExample;