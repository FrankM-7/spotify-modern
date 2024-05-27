import './Navbar.css';
import logo from '../images/spotifyicon.png';
import SearchBox from './SearchBox';
import PillContainer from './PillContainer';

function Navbar({query, setQuery}) {
    return (
        <nav>
            <ul className="horizontal-nav">
                <div className="left-nav">
                    <li><div style={{height: "42px"}}><img src={logo} alt="spotify_logo" className="logo-img" /></div></li>
                    <li><SearchBox query={query} setQuery={setQuery} /></li>    
                </div>
                <div className="right-nav">
                    <li><PillContainer style={{width: "195px"}} /></li>
                    <li><PillContainer style={{width: "130px"}} /></li>
                    <li><PillContainer style={{width: "42px"}} /></li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
