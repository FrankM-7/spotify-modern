import "./FeelWidget.css";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import happy from '../../../images/FeelWidget/happy.png';
import energetic from '../../../images/FeelWidget/energetic.png';
import sad from '../../../images/FeelWidget/sad.png';
import relaxed from '../../../images/FeelWidget/relieved.png';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#222329',
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'white',
  boxShadow: 'none',
  width: '200px',
  padding: "8px",
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
}));


function FeelWidget({ style }) {
  const [selectedCircle, setSelectedCircle] = useState("Relaxed");

  const handleCircleClick = (id) => {
    setSelectedCircle(id);
  };

  // --energetic: #fefd97;
  // --happy: #6ccfc0;
  // --relaxed: #b6a2dd;
  // --sad: #c7ecfe;
  const colors = {
    Energetic: "#fefd97",
    Happy: "#6ccfc0",
    Relaxed: "#b6a2dd",
    Sad: "#c7ecfe",
  };

  return (
    <Item style={style}>
      <div className="circle-container">
        <div
          id="energetic"
          className={`circle ${selectedCircle === "Energetic" ? "selected-emote" : ""}`}
          onClick={() => handleCircleClick("Energetic")}
        >
          <img className="icon" width="21" height="21" src={energetic} alt="energetic" />
        </div>
        <div
          id="happy"
          className={`circle ${selectedCircle === "Happy" ? "selected-emote" : ""}`}
          onClick={() => handleCircleClick("Happy")}
        >
          <img className="icon" width="21" height="21" src={happy} alt="happy" />
        </div>
        <div
          id="relaxed"
          className={`circle ${selectedCircle === "Relaxed" ? "selected-emote" : ""}`}
          onClick={() => handleCircleClick("Relaxed")}
        >
          <img className="icon" width="21" height="21" src={relaxed} alt="relaxed" />
        </div>
        <div
          id="sad"
          className={`circle ${selectedCircle === "Sad" ? "selected-emote" : ""}`}
          onClick={() => handleCircleClick("Sad")}
        >
          <img className="icon" width="21" height="21" src={sad} alt="sad" />
        </div>
      </div>
      <div className="textBox">
          <span>I feel <span style={{ color: colors[selectedCircle] }}>{selectedCircle}</span> today</span>
      </div>
    </Item>
  );
}

export default FeelWidget;