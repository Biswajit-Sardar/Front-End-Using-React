import './Header.css';
// cspell:disable-next-line
import logo from '../../assets/pngegg.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo">
                <img src={logo} alt="logo" />
            </a>
            <nav className="navbar">
                <Link to="/" className="active">Home</Link>
                <Link to="/about">About</Link>

                <Link to="/menu">Menu</Link>
                <Link to="/products">Products</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/contact">Contacts</Link>
                <Link to="/blog">Blogs</Link>
            </nav>
            <div className="buttons">
                <button id="search-btn" type="button">
                    <i className="fas fa-search"></i>
                </button>
                <button id="cart-btn" type="button">
                    <i className="fas fa-shopping-cart"></i>
                </button>
                <button id="menu-btn" type="button">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="search-form">
                <input type="text" className="search-input" id="search-box" placeholder="Search" />
                <i className="fas fa-search"></i>
            </div>
          {/*   <div className="cart-items-container">
                <div className="cart-item">
                    <i className="fas fa-times"></i>
                    <img src={img1} alt="menu" />
                    <div className="content">
                        <h3>cart item 01</h3>
                        <div className="price">$15.99 </div>
                    </div>
                </div>
                <div className="cart-item">
                    <i className="fas fa-times"></i>
                    <img src={img2} alt="menu" />
                    <div className="content">
                        <h3>cart item 02</h3>
                        <div className="price">$16.99 </div>
                    </div>
                </div>
                <div className="cart-item">
                    <i className="fas fa-times"></i>
                    <img src={img3} alt="menu" />
                    <div className="content">
                        <h3>cart item 03</h3>
                        <div className="price">$13.99 </div>
                    </div>
                </div>
                <div className="cart-item">
                    <i className="fas fa-times"></i>
                    <img src={img4} alt="menu" />
                    <div className="content">
                        <h3>cart item 04</h3>
                        <div className="price">$12.99 </div>
                    </div>
                </div>
                <a href="#" className="btn">check out </a>
            </div>*/}
        </header>
    );
};

export default Header;