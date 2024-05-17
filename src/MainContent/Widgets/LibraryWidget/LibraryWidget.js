import "./LibraryWidget.css";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import expand from '../../../images/expand.png';
import travisPic from '../../../images/travis.webp';
import { useState } from 'react';
import soundWaves from '../../../images/sound-waves.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#222329',
    ...theme.typography.body2,
    textAlign: 'center',
    color: 'white',
    boxShadow: 'none',
    width: '200px',
    padding: '8px',
    boxSizing: 'border-box',
}));

function LibraryWidget({ style }) {
    const [selected, setSelected] = useState(1);

    const handleSelect = (index) => {
        setSelected(index);
    };
    // svg icon 
    const svgIcon = <svg height="10px" viewBox="0 0 16 16"><title>Pinned</title><path fill="#1ed760" d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"></path></svg>
    return (
        <Item style={style}>
            <div>
                <div className="lib-title-container">
                    <div id="title" className="nav-row" style={{ height: "42px" }}>
                        <svg height="21px" width="21px" viewBox="0 0 24 24">
                            <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" fill="currentColor"></path>
                        </svg>
                        <div style={{ marginLeft: '10px' }}>Library</div>
                    </div>
                    <div className="lib-circle">
                        <img className="icon" src={expand} alt="expand" style={{ width: '15px', height: '15px' }} />
                    </div>
                </div>
                <div className="playlists-container">
                    <div key={0} className={`playlist-row ${selected === 0 ? 'selected-playlist' : ''}`} onClick={() => handleSelect(0)}>
                        <div className="playlist-left">
                            <img className="playlist-pic" src={travisPic} alt="travis" />
                            <div className="playlist-overview-container">
                                <div className="playlist-title">Liked Songs</div>
                                <div className="playlist-overview">{svgIcon} Playlist • 874 songs</div>
                            </div>
                        </div>
                    </div>
                    <div key={1} className={`playlist-row ${selected === 1 ? 'selected-playlist' : ''}`} onClick={() => handleSelect(1)}>
                        <div className="playlist-left">
                            <img className="playlist-pic" src={travisPic} alt="travis" />
                            <div className="playlist-overview-container">
                                <div className="playlist-title">Travis Scott</div>
                                <div className="playlist-overview">Artist</div>
                            </div>
                        </div>

                        <div className="playlist-right">
                            <img className="playlist-active" src={soundWaves} alt="sound waves" />
                        </div>
                    </div>
                    <div key={2} className={`playlist-row ${selected === 2 ? 'selected-playlist' : ''}`} onClick={() => handleSelect(2)}>
                        <div className="playlist-left">
                            <img className="playlist-pic" src={travisPic} alt="travis" />
                            <div className="playlist-overview-container">
                                <div className="playlist-title">Chill Vibes</div>
                                <div className="playlist-overview">Playlist • Nick</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Item>
    );
}

export default LibraryWidget;