import './Menu.css'

import img1 from '../../assets/pngwing.com.png'
import img2 from '../../assets/pngwing.com (1).png'
import img3 from '../../assets/pngwing.com (2).png'
import img4 from '../../assets/pngwing.com (3).png'
const Menu = () => {
    return (
        <section class="menu" id="menu">
        <h1 class="heading">our <span>menu</span></h1>
        <div class="box-container">
            <div class="box">

                <div class="box-head">
                    <img src={img1} alt=""/>
                    <span class="menu-category">Pizza</span>
                    <h3>6 Mini Pizzas</h3>
                    <div class="price">$104.99 <span>$119.99</span></div>
                </div>
                <div class="box-bottom">
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
            <div class="box">

                <div class="box-head">
                    <img src={img2} alt=""/>
                    <span class="menu-category">Burger</span>
                    <h3>5 Mini Burgers</h3>
                    <div class="price">$99.99 <span>$105.99</span></div>
                </div>
                <div class="box-bottom">
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
            <div class="box">

                <div class="box-head">
                    <img src={img3} alt=""/>
                    <span class="menu-category">Pizza</span>
                    <h3>2 Mixed Pizzas</h3>
                    <div class="price">$49.99 <span>$59.99</span></div>
                </div>
                <div class="box-bottom">
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
            <div class="box">

                <div class="box-head">
                    <img src={img4} alt=""/>
                    <span class="menu-category">Burger</span>
                    <h3>3 Meatball Burgers</h3>
                    <div class="price">$79.99 <span>$99.99</span></div>
                </div>
                <div class="box-bottom">
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Menu