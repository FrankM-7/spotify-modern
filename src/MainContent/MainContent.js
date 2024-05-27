import "./MainContent.css";
import * as React from 'react';
import NavWidget from "./Widgets/NavWidget/NavWidget";
import FeelWidget from "./Widgets/FeelWidget/FeelWidget";
import LibraryWidget from "./Widgets/LibraryWidget/LibraryWidget";
import SongsWidget from "./Widgets/SongsWidget/SongsWidget";
import ArtistWidget from "./Widgets/ArtistWidget/ArtistWidget";
import FriendActivityWidget from "./Widgets/FriendActivityWidget/FriendActivityWidget";
import LatestReleaseWidget from "./Widgets/LatestReleaseWidget/LatestReleaseWidget";
import DiscographyWidget from "./Widgets/DiscographyWidget/DiscographyWidget";
import LikedSongsWidget from "./Widgets/LikedSongsWidget/LikedSongsWidget";
import ResultsWidget from "./Widgets/ResultsWidget/ResultsWidget";

function MainContent({authToken, query}) {
    // set width in px
    const width = '232px';
    const gap = '8px';
    const borderRadius = '27px';
    return (
        <div className="main-container">
            <div className="main-container-column">
                <div className="main-container-row">
                    <div className="main-container-column">
                        <NavWidget style={{width: width, height: '198px', borderRadius: borderRadius}} />
                        <FeelWidget style={{width: width, height: '104px', marginTop: gap, borderRadius: borderRadius}}/>
                        <LibraryWidget style={{width: width, height: '235px', marginTop: gap, borderRadius: borderRadius}}/>
                    </div>
                    <div className="main-container-column" style={{marginLeft: gap}}>
                        <ArtistWidget style={{width: '310px', height: '310px', borderRadius: borderRadius}} />
                    </div>
                    <div className="main-container-column" style={{marginLeft: gap}}>
                        <ResultsWidget query={query} authToken={authToken} style={{width: '710px', height: '310px', borderRadius: borderRadius}} />
                    </div>
                </div>
                <div className="main-container-row">
                    <SongsWidget style={{borderRadius: borderRadius}} /> 
                </div>
            </div>
            <div className="main-container-column" style={{}}>
                <div className="main-container-row" style={{display: 'flex', justifyContent: 'end'}}>
                    <FriendActivityWidget style={{borderRadius: borderRadius}}/>
                </div>
                <div className="main-container-row" style={{gap: gap}}>
                    <div className="main-container-column">
                        <LatestReleaseWidget />
                    </div>
                    <div className="main-container-column" style={{gap: gap}}>
                        <div className="main-container-row" style={{height: '110px', width: '228px'}}>
                            <DiscographyWidget />
                        </div>
                        <div className="main-container-row" style={{height: '110px', width: '228px'}}>
                            <LikedSongsWidget />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;