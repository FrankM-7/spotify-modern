import './LatestReleaseWidget.css';
import latestRelease from '../../../images/latest-release.jpg';
import { styled } from '@mui/material/styles';
import play from '../../../images/play-button.png';

export const Text = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
  }));

  
function LatestReleaseWidget() {
    return (
        <div className="latest-release-widget">
            <div className="lr-col" style={{marginLeft: '17px'}}>
                <div className="lr-header" >
                    <Text style={{fontWeight: '600', fontSize: '15px'}}>Latest Release</Text>
                </div>
                <div className="latest-release-cover-container">
                    <img src={latestRelease} alt="latest release" className="latest-release-image"/>
                </div>
                
                <div className="lr-details">
                    <Text>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                            <div className="explicit-symbol">E</div>
                            <div style={{marginLeft: '7px'}}>SICKO MODE</div>                    
                    </div>
                    <div style={{color: '#8e8e8e'}}>Single</div>
                    </Text>
                </div>
                
                
            </div>
            <div id="second" className='lr-col'>
                <div className="lr-play">
                    <img src={play} alt="play"/>
                </div>
            </div>
        </div>
    );  
}

export default LatestReleaseWidget;