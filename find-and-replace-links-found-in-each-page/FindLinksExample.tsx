import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import findLinksPlugin from './findLinksPlugin';

interface FindLinksExampleProps {
    fileUrl: string;
}

const FindLinksExample: React.FC<FindLinksExampleProps> = ({ fileUrl }) => {
    // Create new plugin
    const findLinksPluginInstance = findLinksPlugin();

    return (
        <Viewer
            fileUrl={fileUrl}
            plugins={[
                // Register plugin
                findLinksPluginInstance,
            ]}
        />
    );
};

export default FindLinksExample;