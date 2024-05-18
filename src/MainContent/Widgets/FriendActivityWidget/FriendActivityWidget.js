import "./FriendActivityWidget.css";
import * as React from 'react';
import { Text } from '../LatestReleaseWidget/LatestReleaseWidget';
import expand from '../../../images/expand.png';
import astroworld from '../../../images/astroworld.jpg';
import profilePic from '../../../images/24.jpg';


function FriendActivityWidget({style}) {
    return (
        <div className="fa-widget">
            <div className="fa-title">
                <Text>Friend Activity</Text>
                <div id="fa" className="circle"></div>
            </div>
            <div className="fa-container">
                <div className="fa-item">
                    <div className="fa-img-text-container">
                        <div className="fa-album-cover">
                            <img src={astroworld} alt="astroworld" />
                        </div>
                        <div className="fa-text">
                            <div className="fa-text-title">
                                <Text>Blinding Lights</Text>
                            </div>
                            <div className="fa-text-subtitle">
                                <Text className="artist">The Weeknd</Text>
                            </div>
                        </div>
                    </div>
                    <div className="fa-friend">
                        <div className="fa-friend-left">
                            <img className="fa-friend-pic" src={profilePic} alt="profile" />
                            <div className="fa-friend-name">
                                <Text>John Appleseed</Text>
                            </div>
                        </div>
                        {/* <div className="fa-friend-right">
                            <Text className="last-active">44min</Text>
                        </div> */}
                    </div>
                </div>
                <div className="fa-item">
                    <div className="fa-img-text-container">
                        <div className="fa-album-cover">
                            <img src={astroworld} alt="astroworld" />
                        </div>
                        <div className="fa-text">
                            <div className="fa-text-title">
                                <Text>Blinding Lights</Text>
                            </div>
                            <div className="fa-text-subtitle">
                                <Text className="artist">The Weeknd</Text>
                            </div>
                        </div>
                    </div>
                    <div className="fa-friend">
                        <div className="fa-friend-left">
                            <img className="fa-friend-pic" src={profilePic} alt="profile" />
                            <div className="fa-friend-name">
                                <Text>John Appleseed</Text>
                            </div>
                        </div>
                        {/* <div className="fa-friend-right">
                            <Text className="last-active">44min</Text>
                        </div> */}
                    </div>
                </div>
                <div className="fa-item">
                    <div className="fa-img-text-container">
                        <div className="fa-album-cover">
                            <img src={astroworld} alt="astroworld" />
                        </div>
                        <div className="fa-text">
                            <div className="fa-text-title">
                                <Text>Blinding Lights</Text>
                            </div>
                            <div className="fa-text-subtitle">
                                <Text className="artist">The Weeknd</Text>
                            </div>
                        </div>
                    </div>
                    <div className="fa-friend">
                        <div className="fa-friend-left">
                            <img className="fa-friend-pic" src={profilePic} alt="profile" />
                            <div className="fa-friend-name">
                                <Text>John Appleseed</Text>
                            </div>
                        </div>
                        {/* <div className="fa-friend-right">
                            <Text className="last-active">44min</Text>
                        </div> */}
                    </div>
                </div>
            </div>
            
            <div className="fa-footer">
                <div className="fa-footer-btn">
                    <Text>See others activity</Text>
                    <img className="icon" src={expand} alt="expand" style={{ marginLeft: "4px", width: '15px', height: '15px'}} />
                </div>
            </div>
        </div>
    );
}

export default FriendActivityWidget;