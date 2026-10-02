import img1 from '../../../assets/pngwing.com (6).png'
import img2 from '../../../assets/pngwing.com (4).png'
import img3 from '../../../assets/pngwing.com (5).png'



const Products = () => {
    return (
         <section class="products" id="products">
    <h1 class="heading">our <span>products</span> </h1>
    <div class="box-container">
        <div class="box">
            <div class="box-head">
                <span class="title">mini burger</span>
                <a href="#" class="name">Bacon Burger</a>
            </div>
            <div class="image">
                <img src={img1} alt=""/>
            </div>
            <div class="box-bottom">
                <div class="info">
                    <b class="price">$6.00</b>
                    <span class="amount">110gr / 300 Cal</span>
                </div>
                <div class="product-btn">
                    <a href="#">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box-head">
                <span class="title">cheese burger</span>
                <a href="#" class="name">cheese Burger</a>
            </div>
            <div class="image">
                <img src={img2} alt=""/>
            </div>
            <div class="box-bottom">
                <div class="info">
                    <b class="price">$12.00</b>
                    <span class="amount">140gr / 2500 Cal</span>
                </div>
                <div class="product-btn">
                    <a href="#">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box-head">
                <span class="title">Double burger</span>
                <a href="#" class="name">Double Burger</a>
            </div>
            <div class="image">
                <img src={img3} alt=""/>
            </div>
            <div class="box-bottom">
                <div class="info">
                    <b class="price">$24.00</b>
                    <span class="amount">440gr / 600 Cal</span>
                </div>
                <div class="product-btn">
                    <a href="#">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </section>
    )



}
export default Products