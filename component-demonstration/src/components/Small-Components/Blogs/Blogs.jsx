import img1 from '../../../assets/delicious-burger-on-wooden-board-2022-03-04-05-58-25-utc.jpg'
import img2 from '../../../assets/delicious-tasty-burgers-on-wooden-background-2021-08-26-15-25-13-utc.jpg'
import img3 from '../../../assets/handmade-burger-on-dark-background-delicious-blac-2021-10-21-02-27-27-utc.jpg'


const Blogs = () => {
    return (
        <section class="blog" id="blog">
    <h1 class="heading">our <span>blog</span> </h1>
    <div class="box-container">
        <div class="box-full">
            <div class="image">
                <img src={img1} alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">how to make burgers</a>
                <span>by admin / 10st may, 2020</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        <div class="box-full">
            <div class="image">
                <img src={img2} alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">how to make burgers</a>
                <span>by admin / 10st may, 2020</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        <div class="box-full">
            <div class="image">
                <img src={img3} alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">how to make burgers</a>
                <span>by admin / 10st may, 2020</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
    </div>
</section>
    )


}

export default Blogs