import React from 'react';
import { Plugin, PluginOnTextLayerRender, Viewer } from '@react-pdf-viewer/core';
import linkifyElement from 'linkifyjs/element';

const FindLinksExample: React.FC<{}> = () => {
    const findLinksPlugin = (): Plugin => {
        const findLinks = (e: PluginOnTextLayerRender) => {
            // `e.ele` represents the element containing all text elements in each page
            // Find all text elements
            e.ele
                // `rpv-core-text` is the CSS class of each text element
                .querySelectorAll('.rpv-core-text')
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

    // Create new plugin
    const findLinksPluginInstance = findLinksPlugin();

    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)' }}>
            <Viewer
                fileUrl='/assets/hyperlink.pdf'
                plugins={[
                    // Register plugin
                    findLinksPluginInstance,
                ]}
            />
        </div>
    );
};

export default FindLinksExample;