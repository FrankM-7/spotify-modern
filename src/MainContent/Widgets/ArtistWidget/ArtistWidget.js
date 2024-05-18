import "./ArtistWidget.css";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import travis from '../../../images/travis.webp';
import { Text } from '../LatestReleaseWidget/LatestReleaseWidget';
import play from '../../../images/play-button.png';
import shuffle from '../../../images/shuffle.png';

function ArtistWidget({style}) {
    return (
        <div className="artist-containers">
            <div className="a-row">
                <div className="artist-img">
                    <img src={travis} alt="travis" />
                </div>
            </div>
            <div className="a-row">
                <div className="a-top">
                    <Text className="verified-artist">Verified Artist</Text>
                    <Text className="artist-name" style={{fontSize: '32px'}}>Travis Scott</Text>
                    <Text className="artist-listeners">67,245,743 monthly listeners</Text>
                </div>

                <div className="a-bottom">
                    <Text id="following" className="a-button">Following</Text>
                    <Text id="shuffle" className="a-button">             
                         <img className="shuffleBtn" src={shuffle} alt="shuffle" />
                    </Text>
                    <div className="f-play">
                        <img src={play} alt="play"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistWidget;