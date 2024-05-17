import "./FriendActivityWidget.css";
import * as React from 'react';
import { Text } from '../LatestReleaseWidget/LatestReleaseWidget';
import expand from '../../../images/expand.png';


function FriendActivityWidget({style}) {
    return (
        <div className="fa-widget">
            <div className="fa-title">
                <Text>Friend Activity</Text>
                <div id="fa" className="circle"></div>
            </div>
            <div className="fa-container">
                <div className="fa-item">
                    <Text>Emily Chang</Text>
                </div>
                <div className="fa-item">
                    <Text>Ryan Williams</Text>
                </div>
                <div className="fa-item">
                    <Text>Elizabeth Clark</Text>
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