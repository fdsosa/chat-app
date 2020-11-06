import '../style/header.scss';
import { Link } from 'react-router-dom';

function Header() {

    return(
        <nav className="nav-container">
            <h3><Link to="/">ChatApp</Link></h3>
        </nav>
    )
}    

export default Header;