import './Review.css'
import img1 from '../../assets/pngwing.com (8).png'
import img2 from '../../assets/pngwing.com (9).png'
import img3 from '../../assets/pngwing.com (10).png'
import img4 from '../../assets/pngwing.com (11).png'




const Review = () => {
    return (
    <section class="review" id="review">
        <h1 class="heading">customer's <span>review</span> </h1>
        <div class="box-container">
            <div class="box">
                <img src={img1} alt="quote"/>
                <p> Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!</p>
                <img src={img2} alt="customer-avatar" class="user"/>
                <h3>Patrick Hellinger</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
            <div class="box">
                <img src={img1} alt="quote"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!</p>
                <img src={img3} alt="customer-avatar" class="user"/>
                <h3>Serena Williams</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
            <div class="box">
                <img src={img1} alt="quote"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos possimus!</p>
                <img src={img4} alt="customer-avatar" class="user"/>
                <h3>Helen Marksen</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>
    </section> )

}

export default Review