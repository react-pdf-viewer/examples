import * as React from 'react';
import { PrimaryButton, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomExitFullScreenButtonExampleProps {
    fileUrl: string;
}

const CustomExitFullScreenButtonExample: React.FC<CustomExitFullScreenButtonExampleProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                renderExitFullScreenButton: (props) => (
                    <div
                        style={{
                            bottom: '1rem',
                            position: 'fixed',
                            right: '1rem',
                            zIndex: 1,
                        }}
                    >
                        <PrimaryButton onClick={props.onClick}>Exit full screen</PrimaryButton>
                    </div>
                ),
            },
        },
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default CustomExitFullScreenButtonExample;
