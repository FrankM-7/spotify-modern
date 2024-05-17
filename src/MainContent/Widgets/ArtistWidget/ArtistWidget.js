import "./ArtistWidget.css";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff',
    ...theme.typography.body2,
    textAlign: 'center',
    boxShadow: 'none',
    width: '250px',
  }));

  
function ArtistWidget({style}) {
    return (
        <Item style={style}>
            <h1>Travis Scott</h1>
        </Item>
    );
}

export default ArtistWidget;