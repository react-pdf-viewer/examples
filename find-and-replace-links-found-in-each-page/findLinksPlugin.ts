import { LayerRenderStatus, Plugin, PluginOnTextLayerRender } from '@react-pdf-viewer/core';
import linkifyElement from 'linkifyjs/element';

const findLinksPlugin = (): Plugin => {
    const findLinks = (e: PluginOnTextLayerRender) => {
        if (e.status !== LayerRenderStatus.DidRender) {
            return;
        }

        // `e.ele` represents the element containing all text elements in each page
        // Find all text elements
        e.ele
            // `rpv-core__text-layer-text` is the CSS class of each text element
            .querySelectorAll('.rpv-core__text-layer-text')
            .forEach((textEle) => {
                linkifyElement(textEle as HTMLElement, {
                    attributes: {
                        // Custom styles
                        style: 'color: transparent; text-decoration: none;',
                        // Open link in new tab
                        target: '_blank',
                    },
                });
            });
    };

    return {
        onTextLayerRender: findLinks,
    };
};

export default findLinksPlugin;
