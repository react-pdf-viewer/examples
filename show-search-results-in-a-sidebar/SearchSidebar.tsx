import * as React from 'react';
import { MinimalButton, PrimaryButton, TextBox } from '@react-pdf-viewer/core';
import { Match, NextIcon, PreviousIcon, SearchIcon, SearchPlugin } from '@react-pdf-viewer/search';

enum SearchStatus {
    NotSearchedYet,
    Searching,
    FoundResults,
}

interface SearchSidebarProps {
    searchPluginInstance: SearchPlugin;
}

const SearchSidebar: React.FC<SearchSidebarProps> = ({ searchPluginInstance }) => {
    const [keyword, setKeyword] = React.useState('');
    const [searchStatus, setSearchStatus] = React.useState(SearchStatus.NotSearchedYet);
    const [matches, setMatches] = React.useState<Match[]>([]);
    const [currentMatch, setCurrentMatch] = React.useState<Match | null>(null);

    const { highlight, jumpToMatch, jumpToPreviousMatch, jumpToNextMatch } = searchPluginInstance;

    const search = () => {
        setSearchStatus(SearchStatus.Searching);
        highlight(keyword).then((matches) => {
            setSearchStatus(SearchStatus.FoundResults);
            setMatches(matches);
            setCurrentMatch(matches.length == 0 ? null : matches[0]);
        });
    };

    const handleClickPreviousButton = () => setCurrentMatch(jumpToPreviousMatch());

    const handleClickNextButton = () => setCurrentMatch(jumpToNextMatch());

    const handleJumpToMatch = (index: number) => setCurrentMatch(jumpToMatch(index));

    const renderMatchSample = (match: Match) => {
        //  match.startIndex    match.endIndex
        //      |                       |
        //      ▼                       ▼
        //  ....[_____props.keyword_____]....

        const wordsBefore = match.pageText.substr(match.startIndex - 20, 20);
        let words = wordsBefore.split(' ');
        words.shift();
        const begin = words.length === 0 ? wordsBefore : words.join(' ');

        const wordsAfter = match.pageText.substr(match.endIndex, 60);
        words = wordsAfter.split(' ');
        words.pop();
        const end = words.length === 0 ? wordsAfter : words.join(' ');

        return (
            <div>
                {begin}
                <span style={{ backgroundColor: 'rgb(255, 255, 0)' }}>
                    {match.pageText.substring(match.startIndex, match.endIndex)}
                </span>
                {end}
            </div>
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                width: '100%',
            }}
        >
            <div style={{ display: 'flex', padding: '.5rem' }}>
                <div style={{ flex: 1, marginRight: '.5rem' }}>
                    <TextBox value={keyword} onChange={setKeyword} />
                </div>
                <PrimaryButton onClick={search}>
                    <SearchIcon />
                </PrimaryButton>
            </div>
            {searchStatus == SearchStatus.FoundResults && (
                <>
                    {matches.length === 0 && 'Not found'}
                    {matches.length > 0 && (
                        <>
                            <div style={{ alignItems: 'center', display: 'flex', padding: '.5rem' }}>
                                <div style={{ color: 'rgba(0, 0, 0, .5)', fontSize: '.8rem', marginRight: '.5rem' }}>
                                    Found {matches.length} results
                                </div>
                                <div style={{ marginLeft: 'auto', marginRight: '.5rem' }}>
                                    <MinimalButton onClick={handleClickPreviousButton}>
                                        <PreviousIcon />
                                    </MinimalButton>
                                </div>
                                <MinimalButton onClick={handleClickNextButton}>
                                    <NextIcon />
                                </MinimalButton>
                            </div>
                            <div style={{ flex: 1, overflow: 'auto', padding: '.5rem 1rem' }}>
                                {matches.map((match, index) => (
                                    <div key={index} style={{ margin: '1rem 0' }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '.5rem',
                                            }}
                                        >
                                            <div>#{index + 1}</div>
                                            <div
                                                style={{
                                                    color: 'rgba(0, 0, 0, .5)',
                                                    fontSize: '.8rem',
                                                    textAlign: 'right',
                                                }}
                                            >
                                                Page {match.pageIndex + 1}
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                backgroundColor: currentMatch === match ? 'rgba(0, 0, 0, .1)' : '',
                                                border: '1px solid rgba(0, 0, 0, .2)',
                                                borderRadius: '.25rem',
                                                overflowWrap: 'break-word',
                                                padding: '.5rem',
                                            }}
                                            onClick={() => handleJumpToMatch(index)}
                                        >
                                            {renderMatchSample(match)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default SearchSidebar;
