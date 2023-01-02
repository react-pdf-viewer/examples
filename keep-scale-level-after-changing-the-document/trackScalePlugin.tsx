import type { Plugin, ViewerState } from '@react-pdf-viewer/core';
import * as React from 'react';

interface TrackScalePlugin extends Plugin {
    scale?: number;
}

export const trackScalePlugin = ({ initialScale }: { initialScale?: number }): TrackScalePlugin => {
    const [scale, setScale] = React.useState(initialScale);

    return {
        onViewerStateChange: (viewerState: ViewerState) => {
            setScale(viewerState.scale);
            return viewerState;
        },
        scale,
    };
};
