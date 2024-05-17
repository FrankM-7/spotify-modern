import './LikedSongsWidget.css';
import { Text } from '../LatestReleaseWidget/LatestReleaseWidget';
import expand from '../../../images/expand.png';
import heart from '../../../images/heart-filled.ico';

function LikedSongsWidget() {
    return (
        <div className="discography-widget">
            <div id="content" className="disc-col">
                <div className="liked-pic">
                  <img src={heart} alt="liked" style={{width: '18px', height: '18px'}} />
                </div>
                <div className="liked-info">
                    <div className="liked-title">
                        <Text>You've liked 42 songs</Text>
                    </div>
                    <div className="liked-artist">
                        <Text className="artist">by Travis Scott</Text>
                    </div>
                </div>
            </div>


            <div id="extend" className="disc-col">
                <div id="disc" className='circle'>
                    <img className="icon" src={expand} alt="expand" style={{ width: '15px', height: '15px', filter: 'none'}} />
                </div>
            </div>
        </div>
    );  
}

export default LikedSongsWidget;
