function App() {
  return (
  <>
      <nav ClassNameName="navbar">
      <div ClassNameName="nav-center">
        <div ClassName="nav-header">
          <img src="./images/logo.svg" ClassName="nav-logo" alt="backroads" />
          <button type="button" ClassName="nav-toggle" id="nav-toggle">
            <i ClassName="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul ClassNameName="nav-links" id="nav-links">
          <li>
            <a href="#home" ClassNameName="nav-link"> home </a>
          </li>

          <li>
            <a href="#about" ClassName="nav-link"> about </a>
          </li>

          <li>
            <a href="#services" ClassName="nav-link"> services </a>
          </li>

          <li>
            <a href="#tours" ClassName="nav-link"> tours</a>
          </li>
        </ul>

        <ul ClassName="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" ClassName="nav-icon"
              ><i ClassName="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" ClassName="nav-icon"
              ><i ClassName="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" ClassName="nav-icon"
              ><i ClassName="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>

    <section ClassName="hero" id="home">
      <div ClassName="hero-banner">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" ClassName="btn hero-btn">explore tours</a>
      </div>
    </section>

    <section ClassName="section" id="about">
      <div ClassName="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div ClassName="section-center about-center">
        <div ClassName="about-img">
          <img
            src="./images/about.jpeg"
            ClassName="about-photo"
            alt="awesome beach"
          />
        </div>
        <article ClassName="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" ClassName="btn">read more</a>
        </article>
      </div>
    </section>

    <section ClassName="section services" id="services">
      <div ClassName="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div ClassName="section-center services-center">
        <article ClassName="service">
          <span ClassName="service-icon"><i ClassName="fas fa-wallet fa-fw"></i></span>
          <div ClassName="service-info">
            <h4 ClassName="service-title">saving money</h4>
            <p ClassName="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article ClassName="service">
          <span ClassName="service-icon"><i ClassName="fas fa-tree fa-fw"></i></span>
          <div ClassName="service-info">
            <h4 ClassName="service-title">endless hiking</h4>
            <p ClassName="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article ClassName="service">
          <span ClassName="service-icon"><i ClassName="fas fa-socks fa-fw"></i></span>
          <div ClassName="service-info">
            <h4 ClassName="service-title">amazing comfort</h4>
            <p ClassName="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section ClassName="section" id="tours">
      <div ClassName="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div ClassName="section-center featured-center">
        <article ClassName="tour-card">
          <div ClassName="tour-img-container">
            <img src="./images/tour-1.jpeg" ClassName="tour-img" alt="" />
            <p ClassName="tour-date">august 26th, 2020</p>
          </div>
          <div ClassName="tour-info">
            <div ClassName="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div ClassName="tour-footer">
              <p>
                <span><i ClassName="fas fa-map"></i></span> china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article ClassName="tour-card">
          <div ClassName="tour-img-container">
            <img src="./images/tour-2.jpeg" ClassName="tour-img" alt="" />
            <p ClassName="tour-date">october 1th, 2020</p>
          </div>
          <div ClassName="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div ClassName="tour-footer">
              <p>
                <span><i ClassName="fas fa-map"></i></span> indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article ClassName="tour-card">
          <div ClassName="tour-img-container">
            <img src="./images/tour-3.jpeg" ClassName="tour-img" alt="" />
            <p ClassName="tour-date">september 15th, 2020</p>
          </div>
          <div ClassName="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div ClassName="tour-footer">
              <p>
                <span><i ClassName="fas fa-map"></i></span> hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article ClassName="tour-card">
          <div ClassName="tour-img-container">
            <img src="./images/tour-4.jpeg" ClassName="tour-img" alt="" />
            <p ClassName="tour-date">december 5th, 2019</p>
          </div>
          <div ClassName="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div ClassName="tour-footer">
              <p>
                <span><i ClassName="fas fa-map"></i></span> kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <footer ClassName="section footer">
      <ul ClassName="footer-links">
        <li>
          <a href="#home" ClassName="footer-link">home</a>
        </li>
        <li>
          <a href="#about" ClassName="footer-link">about</a>
        </li>
        <li>
          <a href="#services" ClassName="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" ClassName="footer-link">featured</a>
        </li>
      </ul>
      <ul ClassName="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" ClassName="footer-icon"
            ><i ClassName="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" ClassName="footer-icon"
            ><i ClassName="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" ClassName="footer-icon"
            ><i ClassName="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p ClassName="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  
  </>

  );
}

export default App;
