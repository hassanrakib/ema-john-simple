import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import './Header.css';
function Header() {
    return (
        <nav className="header">
            <img src={logo} alt="ema-john logo" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Header;