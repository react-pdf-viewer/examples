import React from 'react';
import { CharacterMap, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface CharacterMapExampleProps {
    fileUrl: string;
}

const CharacterMapExample: React.FC<CharacterMapExampleProps> = ({ fileUrl }) => {
    const characterMap: CharacterMap = {
        isCompressed: true,
        url: 'https://unpkg.com/pdfjs-dist@2.5.207/cmaps/',
    };

    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px'
            }}
        >
            <Viewer
                characterMap={characterMap}
                fileUrl={fileUrl}
            />
        </div>
    );
};

export default CharacterMapExample;
