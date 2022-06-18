import { Popover, Position, Tooltip, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import type { RenderHighlightsProps } from '@react-pdf-viewer/search';
import * as React from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomizeSearchHighlightedElementsExampleProps {
    fileUrl: string;
}

const CustomizeSearchHighlightedElementsExample: React.FC<CustomizeSearchHighlightedElementsExampleProps> = ({
    fileUrl,
}) => {
    const renderHighlights = React.useCallback(
        (renderProps: RenderHighlightsProps) => (
            <>
                {renderProps.highlightAreas.map((area, index) => (
                    <div
                        key={`${area.pageIndex}-${index}`}
                        style={{
                            ...renderProps.getCssProperties(area),
                            position: 'absolute',
                        }}
                    >
                        <Popover
                            closeOnClickOutside={true}
                            closeOnEscape={true}
                            content={() => (
                                <div style={{ padding: '0.5rem', width: '12rem' }}>More information go here</div>
                            )}
                            offset={{ top: 8 + (area.height * area.pageHeight) / 100, left: 0 }}
                            position={Position.BottomCenter}
                            target={(toggle, _) => (
                                <Tooltip
                                    content={() => 'Click to see more information'}
                                    offset={{ top: 8 + (area.height * area.pageHeight) / 100, left: 0 }}
                                    position={Position.BottomCenter}
                                    target={
                                        <div
                                            className="rpv-search__highlight"
                                            data-index={index}
                                            style={{
                                                left: 0,
                                                position: 'absolute',
                                                top: 0,
                                                height: '100%',
                                                width: '100%',
                                            }}
                                            title={area.keywordStr.trim()}
                                            onClick={() => toggle()}
                                        />
                                    }
                                />
                            )}
                        />
                    </div>
                ))}
            </>
        ),
        []
    );

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            searchPlugin: {
                renderHighlights,
            },
        },
    });

    return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default CustomizeSearchHighlightedElementsExample;
