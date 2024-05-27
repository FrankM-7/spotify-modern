import React from 'react';
import './Player.css';
import add from '../images/add.png';
import heart from '../images/heart.png';
import { styled } from '@mui/material/styles';
import playButton from '../images/play-button.png';
import previous from '../images/previous.png';
import next from '../images/next.png';
import repeat from '../images/repeat.png';
import shuffle from '../images/shuffle.png';
import rodeoAlbum from '../images/rodeo-album.jpg';
import queue from '../images/queue.png';
import { useEffect, useState } from 'react';
const Text = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
}));

const track = {
  name: "",
  album: {
    images: [
      { url: "" }
    ]
  },
  artists: [
    { name: "" }
  ]
}

function Player(props) {

  const [player, setPlayer] = useState(null);
  const [current_track, setTrack] = useState(track);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.25);
  const [device_id, setDeviceID] = useState(null);

  useEffect(() => {
    console.log(device_id);
    // fetch the transfer playback endpoint
    fetch("/playback/transfer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_id: device_id,
      }),
    });
    
  }, [device_id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

      const playerLocal = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => { cb(props.token); },
        volume: volume
      });

      playerLocal.connect();

      playerLocal.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setDeviceID(device_id);
      });

      playerLocal.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      playerLocal.addListener('player_state_changed', ((state) => {
        if (!state) {
          return;
        }

        setTrack(state.track_window.current_track);
      }));


      setPlayer(playerLocal);

    };
  }, [props.token]);

  useEffect(() => {
    if (!player) return;
    const intervalId = setInterval(() => {
      player.getCurrentState().then(state => {
        if (!state) {
          console.error('User is not playing music through the Web Playback SDK');
          return;
        }
        // console.log(state.position / state.duration);
        setProgress((state.position / state.duration) * 100);
      });
      
    }, 1000);

    // Cleanup the interval on unmount or when player changes
    return () => clearInterval(intervalId);
  }, [player]);

  const handleProgressClick = (event) => {
    const progressContainer = event.currentTarget;
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = rect.width;
    const newProgress = (offsetX / width) * 100;
    setProgress(newProgress);

    // Seek the player to the new position
    if (player) {
      player.seek(newProgress / 100 * current_track.duration_ms);
    }
  };

  const handleVolumeChange = (event) => {
    const volumeContainer = event.currentTarget;
    const rect = volumeContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = rect.width;
    const newVolume = (offsetX / width);
    setVolume(newVolume);

    // const volume = event.target.value;
    // setVolume(volume);
    if (player) {
      player.setVolume(newVolume);
    }
  }
  
  const onPrevClick = () => {
    player.previousTrack();
  };

  const onPlayClick = () => {
    console.log(progress);
    player.togglePlay();
  }

  const onNextClick = () => {
    player.nextTrack();
  }

  return (
    <div className="player" style={{ borderRadius: "27px" }}>
      <div className="player-col">
        <div className="album-art-container">
          <img className="album-art" src={current_track.album.images[0].url} alt="album art" />
        </div>
        <div className="song-info-container">
          <div className="song">
            <Text>{current_track.name}</Text>
            <Text className="artist">{current_track.artists[0].name}</Text>
          </div>

          <div className="circle-container-player">
            <div className="circle">
              <img className="player-icon" src={heart} alt="heart" />
            </div>
            <div className="circle">
              <img className="player-icon" src={add} alt="add" />
            </div>
          </div>
        </div>
      </div>
      <div className="player-controls">
        <div className="player-controls-row">
          <div className="button-controls">
            <img src={shuffle} alt="shuffle" />
          </div>
          <div className="button-controls" onClick={() => onPrevClick()}>
            <img src={previous} alt="previous" />
          </div>
          <div className="play-button" onClick={() => onPlayClick()}>
            <img className="play-button-img" src={playButton} alt="play" />
          </div>
          <div className="button-controls" onClick={() => onNextClick()}>
            <img src={next} alt="next" />
          </div>
          <div className="button-controls">
            <img src={repeat} alt="repeat" />
          </div>
        </div>
        <div className="player-controls-row">
          <Text className="time">0:00</Text>
          <div className="progress-container" onClick={handleProgressClick}>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <Text className="time">3:00</Text>
        </div>
      </div>
      <div id="right-side" className="player-col">
        <div className="player-right-row-top">
          <img className="queue-album" src={rodeoAlbum} alt="album art" />
          <div className="queue-info">
            <Text className="queue-song">Impossible</Text>
            <Text className="queue-artist">Travis Scott</Text>
          </div>
          <img className="queue-icon" src={queue} alt="queue" />
        </div>
        <div className="player-right-row-bottom">
          <svg className="spotify-icons" viewBox="0 0 16 16"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg>
          <svg className="spotify-icons" viewBox="0 0 16 16"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>
          <svg className="spotify-icons" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
          <svg className="spotify-icons" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path></svg>
          <div className="progress-container" style={{ width: "100px" }} onClick={handleVolumeChange}>
            <div className="progress-bar" style={{ width: `${volume * 100}%`, backgroundColor: "#f5f5f5" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;