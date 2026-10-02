import img from '../../../assets/pngwing.com (7).png'

const Abouts = () => {
  return (
    <div>

      <section className="about" id="about">

        <h1 className="heading">
          about <span>us</span>
        </h1>

        <div className="row">

          <div className="image">
            <img src={img} alt="" />
          </div>

          <div className="content">

            <h3>What is the secret recipe of our burgers</h3>

            <div className="paragraph">

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quia officia id et, corrupti assumenda.
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quia officia id et, corrupti assumenda.
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quia officia id et, corrupti assumenda.
              </p>

            </div>

            <a href="#" className="btn">
              Learn More
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Abouts