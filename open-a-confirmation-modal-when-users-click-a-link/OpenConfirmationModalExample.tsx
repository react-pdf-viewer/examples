import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';

import openLinksPlugin from './openLinksPlugin';

interface OpenConfirmationModalExampleProps {
    fileUrl: string;
}

const OpenConfirmationModalExample: React.FC<OpenConfirmationModalExampleProps> = ({ fileUrl }) => {
    const openLinksPluginInstance = openLinksPlugin();

    return <Viewer fileUrl={fileUrl} plugins={[openLinksPluginInstance]} />;
};

export default OpenConfirmationModalExample;
