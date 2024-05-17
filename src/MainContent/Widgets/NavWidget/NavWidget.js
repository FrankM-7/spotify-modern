import { Paper } from '@mui/material';
import './NavWidget.css';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import recentSVG from '../../../images/recent.png';
import followingSVG from '../../../images/following.png';
import downloadSVG from '../../../images/download.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#222329',
    ...theme.typography.body2,
    textAlign: 'center',
    color: 'white',
    boxShadow: 'none',
    width: '200px',
    boxSizing: 'border-box',
    padding: '8px 8px',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
}));

function NavWidget({ style }) {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
        setSelected(index);
    };

    // array of SVG icons
    const svgIcons = [
            <svg width="21" height="21" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" fill="currentColor"></path>
            </svg>,
            <img className="icon" src={recentSVG} alt="Icon" style={{ width: '19px', height: '19px' }} />,
            <img className="icon" src={followingSVG} alt="Icon" style={{ width: '19px', height: '19px' }} />,
            <img className="icon" src={downloadSVG} alt="Icon" style={{ width: '21px', height: '21px' }} />
        ];
        
        

    return (
        <Item style={style}>
            {['Home', 'Recent', 'Followed Artists', 'Downloaded'].map((item, index) => (
                <div
                    key={index}
                    className={`nav-row ${selected === index ? 'selected' : ''}`}
                    onClick={() => handleSelect(index)}
                >
                    {svgIcons[index]} {/* SVG icon added here */}
                    <div style={{marginLeft: '10px'}}>{item}</div>
                </div>
            ))}
        </Item>
    );
}

export default NavWidget;
