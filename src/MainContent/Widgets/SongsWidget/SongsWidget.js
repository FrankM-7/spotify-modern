import "./SongsWidget.css";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import expand from '../../../images/expand.png';
import astroworld from '../../../images/astroworld.jpg';
import heart from '../../../images/heart.png';
import add from '../../../images/add.png';
import more from '../../../images/more.png';
import { useState } from "react";
import soundWaves from '../../../images/sound-waves-black.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    textAlign: 'center',
    color: 'white',
    boxShadow: 'none',
    width: '750px',
    height: '227px',
    backdropFilter: 'blur(20px)',
    padding: '8px',
    boxSizing: 'border-box',
}));

function SongsWidget({ style }) {
    const [selected, setSelected] = useState(1);
    const handleSelect = (index) => {
        console.log(index);
        setSelected(index);
    };

    return (
        <Item style={style}>
            <div className="song-widget-title">
                <div>Popular</div>
                <div className="song-circle" style={{ height: '43px', width: '43px' }}>
                    <img className="icon" src={expand} alt="expand" style={{ width: '15px', height: '15px' }} />
                </div>
            </div>
            <div id={0} className={`song-row ${selected === 0 ? 'selected-song' : ''}`} onDoubleClick={() => handleSelect(0)}>
                <div className="song-row-container">
                    <div className="song-col" style={{flex: '1', marginLeft: '0px'}}>
                        <div style={{marginLeft: '8px', width: '20px', textAlign: 'end'}}>{selected === 0 ? <img className="playlist-active" src={soundWaves} alt="sound waves" style={{marginLeft: '8px',  display: 'flex',  justifyContent: 'center', alignItems: 'center', filter: 'invert(100%) sepia(0%) saturate(7490%) hue-rotate(196deg) brightness(103%) contrast(101%)' }}/> : 0 }</div>
                        <img style={{marginLeft: '16px'}} src={astroworld} alt="astroworld" className="playlist-pic" />
                        <div className="explicit-symbol" style={{marginLeft: '12px'}}>E</div>
                        <div style={{marginLeft: '6px'}} className="song-title">SICKO MODE</div>
                    </div>
                    <div className="song-col">
                        <div className="views-count">429,663,413</div>
                    </div>
                    <div className="song-col">
                        <div>3:31</div>
                    </div>
                    <div className="song-col">
                        <div><img src={more} alt="more" className="heart-icon" />  </div>
                        <div><img src={add} alt="add" className="heart-icon" style={{height: "15px", width: "15px"}}/></div>
                        <div><img src={heart} alt="heart" className="heart-icon" style={{marginRight: "10px"}}/></div>
                    </div>
                </div>
            </div>
            <div id={1} className={`song-row ${selected === 1 ? 'selected-song' : ''}`} onDoubleClick={() => handleSelect(1)}>
                <div className="song-row-container">
                    <div className="song-col" style={{flex: '1', marginLeft: '0px'}}>
                        <div style={{marginLeft: '8px', width: '20px', textAlign: 'end'}}>
                            {selected === 1 ? <img className="playlist-active" src={soundWaves} alt="sound waves" style={{marginLeft: '8px',  display: 'flex',  justifyContent: 'center', alignItems: 'center', filter: 'invert(100%) sepia(0%) saturate(7490%) hue-rotate(196deg) brightness(103%) contrast(101%)' }}/> : 1 }
                        </div>
                        <img style={{marginLeft: '16px'}} src={astroworld} alt="astroworld" className="playlist-pic" />
                        <div className="explicit-symbol" style={{marginLeft: '12px'}}>E</div>
                        <div style={{marginLeft: '6px'}} className="song-title">SICKO MODE</div>
                    </div>
                    <div className="song-col">
                        <div className="views-count">429,663,413</div>
                    </div>
                    <div className="song-col">
                        <div>3:31</div>
                    </div>
                    <div className="song-col">
                        <div><img src={more} alt="more" className="heart-icon" />  </div>
                        <div><img src={add} alt="add" className="heart-icon" style={{height: "15px", width: "15px"}}/></div>
                        <div><img src={heart} alt="heart" className="heart-icon" style={{marginRight: "10px"}}/></div>
                    </div>
                </div>
            </div>
            <div id={2} className={`song-row ${selected === 2 ? 'selected-song' : ''}`} onDoubleClick={() => handleSelect(2)}>
                <div className="song-row-container">
                    <div className="song-col" style={{flex: '1', marginLeft: '0px'}}>
                        <div style={{marginLeft: '8px', width: '20px', textAlign: 'end'}}>
                            {selected === 2 ? <img className="playlist-active" src={soundWaves} alt="sound waves" style={{marginLeft: '8px',  display: 'flex',  justifyContent: 'center', alignItems: 'center', filter: 'invert(100%) sepia(0%) saturate(7490%) hue-rotate(196deg) brightness(103%) contrast(101%)' }}/> : 2 }
                        </div>
                        <img style={{marginLeft: '16px'}} src={astroworld} alt="astroworld" className="playlist-pic" />
                        <div className="explicit-symbol" style={{marginLeft: '12px'}}>E</div>
                        <div style={{marginLeft: '6px'}} className="song-title">SICKO MODE</div>
                    </div>
                    <div className="song-col">
                        <div className="views-count">429,663,413</div>
                    </div>
                    <div className="song-col">
                        <div>3:31</div>
                    </div>
                    <div className="song-col">
                        <div><img src={more} alt="more" className="heart-icon" />  </div>
                        <div><img src={add} alt="add" className="heart-icon" style={{height: "15px", width: "15px"}}/></div>
                        <div><img src={heart} alt="heart" className="heart-icon" style={{marginRight: "10px"}}/></div>
                    </div>
                </div>
            </div>
        </Item>
    );
}

export default SongsWidget;