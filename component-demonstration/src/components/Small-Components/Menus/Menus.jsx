import img1 from '../../../assets/pngwing.com.png'
import img2 from '../../../assets/pngwing.com (1).png'
import img3 from '../../../assets/pngwing.com (2).png'
import img4 from '../../../assets/pngwing.com (3).png'


const Menus = () => {
  return (
     <section className="menu" id="menu">
        <h1 className="heading">our <span>menu</span></h1>
        <div className="box-container">
            <div className="box">

                <div className="box-head">
                    <img src={img1} alt=""/>
                    <span className="menu-category">Pizza</span>
                    <h3>6 Mini Pizzas</h3>
                    <div className="price">$104.99 <span>$119.99</span></div>
                </div>
                <div className="box-bottom">
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>
            <div className="box">

                <div className="box-head">
                    <img src={img2} alt=""/>
                    <span className="menu-category">Burger</span>
                    <h3>5 Mini Burgers</h3>
                    <div className="price">$99.99 <span>$105.99</span></div>
                </div>
                <div className="box-bottom">
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>
            <div className="box">

                <div className="box-head">
                    <img src={img3} alt=""/>
                    <span className="menu-category">Pizza</span>
                    <h3>2 Mixed Pizzas</h3>
                    <div className="price">$49.99 <span>$59.99</span></div>
                </div>
                <div className="box-bottom">
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>
            <div className="box">

                <div className="box-head">
                    <img src={img4} alt=""/>
                    <span className="menu-category">Burger</span>
                    <h3>3 Meatball Burgers</h3>
                    <div className="price">$79.99 <span>$99.99</span></div>
                </div>
                <div className="box-bottom">
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>
        </div>
    </section>

  )


}

export default Menus