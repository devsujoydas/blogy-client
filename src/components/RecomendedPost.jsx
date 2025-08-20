import React from 'react'

const RecomendedPost = () => {
  return (
    <section className="section recommended" aria-label="recommended post">
        <div className="container">

          <p className="section-subtitle">
            <strong className="strong">Recommended</strong>
          </p>

          <ul className="grid-list">

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-1.jpg" width="300" height="360" loading="lazy"
                    alt="The trick to getting more done is to have the freedom to roam around " className="img-cover"/>

                  <ul className="avatar-list absolute">

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <h3 className="h5">
                    <a href="#" className="card-title hover:underline">
                      The trick to getting more done is to have the freedom to roam around
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-2.jpg" width="300" height="360" loading="lazy"
                    alt="Every day, in every city and town across the country " className="img-cover"/>

                  <ul className="avatar-list absolute">

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <h3 className="h5">
                    <a href="#" className="card-title hover:underline">
                      Every day, in every city and town across the country
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-3.jpg" width="300" height="360" loading="lazy"
                    alt="I work best when my space is filled with inspiration " className="img-cover"/>

                  <ul className="avatar-list absolute">

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <h3 className="h5">
                    <a href="#" className="card-title hover:underline">
                      I work best when my space is filled with inspiration
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-4.jpg" width="300" height="360" loading="lazy"
                    alt="I have my own definition of minimalism " className="img-cover"/>

                  <ul className="avatar-list absolute">

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-4.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <h3 className="h5">
                    <a href="#" className="card-title hover:underline">
                      I have my own definition of minimalism
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-5.jpg" width="300" height="360" loading="lazy"
                    alt="Change your look and your attitude " className="img-cover"/>

                  <ul className="avatar-list absolute">

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <h3 className="h5">
                    <a href="#" className="card-title hover:underline">
                      Change your look and your attitude
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-6.jpg" width="300" height="360" loading="lazy"
                    alt="The difference is quality " className="img-cover"/>

                  <ul className="avatar-list absolute">

                    <li className="avatar-item">
                      <a href="#" className="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          className="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div className="card-content">

                  <h3 className="h5">
                    <a href="#" className="card-title hover:underline">
                      The difference is quality
                    </a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default RecomendedPost