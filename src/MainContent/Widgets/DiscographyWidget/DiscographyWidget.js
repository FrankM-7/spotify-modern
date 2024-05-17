import './DiscographyWidget.css';
import expand from '../../../images/expand.png';
import { Text } from '../LatestReleaseWidget/LatestReleaseWidget';
import astroworld from '../../../images/astroworld.jpg';
import travis from '../../../images/travis.webp';
import rodeo from '../../../images/rodeo-album.jpg';

function DiscographyWidget() {
    return (
        <div className="discography-widget">
            <div id="content" className="disc-col">
                <div className="disc-title">
                    <Text>Discography</Text>
                </div>
                <div className="disc-row">
                    <div className="disc-cover">
                        <img src={astroworld} />
                    </div>
                    <div className="disc-cover">
                        <img src={travis} />
                    </div>
                    <div className="disc-cover">
                        <img src={rodeo} />
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

export default DiscographyWidget;