import * as React from 'react';
import { SpecialZoomLevel, Store } from '@react-pdf-viewer/core';

import StoreProps from './StoreProps';

const Tracker: React.FC<{
    store: Store<StoreProps>,
}> = ({ store }) => {
    const handleFullScreenChange = (): void => {
        const fullScreenEle = document.fullscreenElement;
        const getPagesContainer = store.get('getPagesContainer');
        const zoom = store.get('zoom');
        
        if (fullScreenEle && getPagesContainer && getPagesContainer() === fullScreenEle && zoom) {
            zoom(SpecialZoomLevel.PageFit);
        }
    };

    React.useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.addEventListener('MSFullscreenChange', handleFullScreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullScreenChange);

        return (): void => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
        };
    }, []);

    return <></>;
};

export default Tracker;
