import { useState } from 'react';
import './Header.css';
import logo from '../../assets/pngegg.png';
import img1 from '../../assets/pngwing.com (1).png';
import img2 from '../../assets/pngwing.com (2).png';
import img3 from '../../assets/pngwing.com (3).png';
import img4 from '../../assets/pngwing.com (4).png';
import { Link } from 'react-router-dom';

const Header = () => {

    // Search open / close
    const [searchActive, setSearchActive] = useState(false);

    // Cart open / close
    const [cartActive, setCartActive] = useState(false);

    // Mobile menu open / close
    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className="header">

            {/* Logo */}
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>


            {/* Navbar */}
            
            <nav className={`navbar ${menuActive ? 'active' : ''}`}>

                <Link to="/" className="active">
                    Home
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/menu">
                    Menu
                </Link>

                <Link to="/products">
                    Products
                </Link>

                <Link to="/reviews">
                    Reviews
                </Link>

                <Link to="/contact">
                    Contacts
                </Link>

                <Link to="/blog">
                    Blogs
                </Link>

            </nav>


            {/* Buttons */}
            <div className="buttons">

                {/* Search Button */}
                <button
                    id="search-btn"
                    type="button"
                    onClick={() => {
                        setSearchActive(!searchActive);
                        setCartActive(false);
                    }}
                >
                    <i className="fas fa-search"></i>
                </button>


                {/* Cart Button */}
                <button
                    id="cart-btn"
                    type="button"
                    onClick={() => {
                        setCartActive(!cartActive);
                        setSearchActive(false);
                    }}
                >
                    <i className="fas fa-shopping-cart"></i>
                </button>


                {/* Menu Button */}
                <button
                    id="menu-btn"
                    type="button"
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <i className="fas fa-bars"></i>
                </button>

            </div>


            {/* Search Form */}
            <div className={`search-form ${searchActive ? 'active' : ''}`}>

                <input
                    type="text"
                    className="search-input"
                    id="search-box"
                    placeholder="Search"
                />

                <i className="fas fa-search"></i>

            </div>


            {/* Cart Items */}
            <div
                className={`cart-items-container ${
                    cartActive ? 'active' : ''
                }`}
            >

                {/* Cart Item 01 */}
                <div className="cart-item">

                    <i className="fas fa-times"></i>
                    <img src={img1} alt="menu"></img>
                    <div className="content">
                        <h3>Cart Item 01</h3>
                        <div className="price">
                            $15.99
                        </div>
                    </div>

                </div>


                {/* Cart Item 02 */}
                <div className="cart-item">
                    <img src={img2} alt="menu"></img>
                    <i className="fas fa-times"></i>

                    <div className="content">
                        <h3>Cart Item 02</h3>
                        <div className="price">
                            $16.99
                        </div>
                    </div>

                </div>


                {/* Cart Item 03 */}
                <div className="cart-item">
                    <img src={img3} alt="menu"></img>
                    <i className="fas fa-times"></i>

                    <div className="content">
                        <h3>Cart Item 03</h3>
                        <div className="price">
                            $13.99
                        </div>
                    </div>

                </div>


                {/* Cart Item 04 */}
                <div className="cart-item">
                    <img src={img4} alt="menu"></img>
                    <i className="fas fa-times"></i>

                    <div className="content">
                        <h3>Cart Item 04</h3>
                        <div className="price">
                            $12.99
                        </div>
                    </div>

                </div>


                {/* Checkout Button */}
                <Link to="/checkout" className="btn">
                    Check Out
                </Link>

            </div>

        </header>
    );
};

export default Header;