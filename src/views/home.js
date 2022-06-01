import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-container01">
            <div className="home-left-side">
              <div data-type="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
              <Link to="/" className="home-link anchor">
                Acasa
              </Link>
              <Link to="/istoric" className="home-link01 anchor">
                Istoric
              </Link>
              <Link to="/biodiversitate" className="home-link02 anchor">
                Biodiversitate
              </Link>
              <Link to="/problemeecologice" className="home-link03 anchor">
                Probleme ecologice
              </Link>
              <Link to="/obiectiveturistice" className="home-link04 anchor">
                Obiective turistice
              </Link>
              <Link to="/stiatica" className="home-link05 anchor">
                Stiati ca?
              </Link>
            </div>
          </div>
          <div className="home-right-side"></div>
          <Link to="/contact" className="home-cta-btn anchor button">
            <span>
              <span>CONTACT</span>
              <span></span>
            </span>
          </Link>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container02">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image"
              />
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container">
              <a href="#resources" className="home-link06 anchor">
                Resources
              </a>
              <a href="#inspiration" className="home-link07 anchor">
                Inspiration
              </a>
              <span className="home-link08 anchor">Process</span>
              <a href="#ourstory" className="home-link09 anchor">
                Our story
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="resources" className="home-hero">
        <div className="home-content-container">
          <h1 className="home-heading section-Heading">
            Rezervatia Biosferei Delta Dunarii
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="home-text03">
            cea mai mare zona umeda din Europa
          </span>
        </div>
      </div>
      <div id="inspiration" className="home-features">
        <div className="home-banner">
          <h2 className="home-text04 section-Heading">Despre Delta Dunarii</h2>
          <span className="home-text05">
            <span>
              {' '}
              Dunărea se varsă în Marea Neagră prin intermediul celor trei brațe
              principale care formează Delta Dunării: Brațul Chilia, cu lungimea
              cea mai mare (120 km); Sulina (64 km lungime) și Sfântu Gheorghe
              (cel mai vechi brat, lungime 112 km). În jur de 15.000 de oameni
              trăiesc în Delta Dunării, în cele 28 de sate și un oraș (Sulina).
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Zona este alcătuită dintr-o rețea complexă de căi navigabile și
              lacuri împărțite între cele trei canale principale ale estuarului.
              Această zonă de insule plutitoare de stuf, păduri, pășuni și dune
              de nisip acoperă 5165 km2 și găzduiește un amestec fascinant de
              culturi și oameni, precum și o gamă variată de specii sălbatice.
            </span>
          </span>
          <div className="home-stats">
            <div className="home-stat">
              <h1 className="home-text21">
                <span>5000</span>
                <span>+</span>
              </h1>
              <span className="home-text24">km2 suprafața Deltei Dunării</span>
            </div>
            <div className="home-stat1">
              <h1 className="home-text25">
                <span>5000</span>
                <span>+</span>
              </h1>
              <span className="home-text28">
                specii de plante, animale și păsări
              </span>
            </div>
            <div className="home-stat2">
              <h1 className="home-text29">
                <span>15000</span>
                <span>+</span>
              </h1>
              <span className="home-text32">
                localnici trăiesc în 28 de localități
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div id="ourstory" className="home-our-story">
        <div className="home-heading-container">
          <h1 className="home-text33 section-Heading">Galerie</h1>
        </div>
        <div className="home-gallery">
          <div className="home-container03">
            <img
              alt="image"
              src="/playground_assets/marsilea_quadrifolia_kz2-400h.jpg"
              className="home-image01"
            />
          </div>
          <div className="home-container04">
            <div className="home-container05">
              <img
                alt="image"
                src="/playground_assets/romania-2739007-200h.jpg"
                className="home-image02"
              />
              <img
                alt="image"
                src="/playground_assets/nymphaea_alba_in_duisburg-400w.jpg"
                className="home-image03"
              />
              <img
                alt="image"
                src="/playground_assets/danube-2529572-400w.jpg"
                className="home-image04"
              />
            </div>
            <div className="home-container06">
              <div className="home-container07">
                <img
                  alt="image"
                  src="/playground_assets/250px-spotted_knapweed_%5Bcentaurea_maculosa%5D-300w.jpg"
                  className="home-image05"
                />
              </div>
              <img
                alt="image"
                src="/playground_assets/great-white-pelicans-5791396-400w.jpg"
                className="home-image06"
              />
              <img
                alt="image"
                src="/playground_assets/frog-5812244-200h.jpg"
                className="home-image07"
              />
            </div>
            <div className="home-container08">
              <img
                alt="image"
                src="/playground_assets/creeping_butercup_close_800-500w.jpg"
                className="home-image08"
              />
              <img
                alt="image"
                src="/playground_assets/marsilea_quadrifolia_kz2-400h.jpg"
                className="home-image09"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-get-in-touch">
        <h2 className="home-text34 section-Heading">Get in touch</h2>
        <div className="home-content-container1">
          <div className="home-form-container">
            <span className="home-heading1 bigCard-Heading">
              Lasa-ne un mesaj
            </span>
            <Link to="/contact" className="home-cta-btn1 anchor button">
              AICI
            </Link>
          </div>
          <div className="home-pricing">
            <div className="home-container09">
              <a
                href="https://merchants.payulatam.com/login/auth"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <div className="home-container10">
                  <h1 className="home-text35">Doneaza</h1>
                  <span className="home-text36">
                    <span>
                      <span>
                        Sustine rezervatia biosferei Delta Dunarii printr-o
                        donatie folosind serviciul paypal sau transfer ban
                      </span>
                      <span className="home-text39"></span>
                      <span>
                        car.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span className="home-text42 card-Heading">
                    <span>
                      <span>ASOCIATIA BIOSFERA DELTA DUNARII</span>
                    </span>
                    <br></br>
                    <span>Cont: ROBTRL1234635733456</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://twitter.com/deltadunariiro"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ARBDD/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/danubedelta/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="anchor">Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
