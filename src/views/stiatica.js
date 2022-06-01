import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './stiatica.css'

const Stiatica = (props) => {
  return (
    <div className="stiatica-container">
      <Helmet>
        <title>Stiati ca? - Landing Page</title>
        <meta property="og:title" content="Stiati ca? - Landing Page" />
      </Helmet>
      <div className="stiatica-navbar">
        <Link to="/contact" className="stiatica-cta-btn anchor button">
          CONTACT
        </Link>
        <div className="stiatica-container1">
          <div className="stiatica-left-side">
            <div data-type="BurgerMenu" className="stiatica-burger-menu">
              <svg viewBox="0 0 1024 1024" className="stiatica-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <Link to="/" className="stiatica-link anchor">
              Acasa
            </Link>
            <Link to="/istoric" className="stiatica-link01 anchor">
              Istoric
            </Link>
            <Link to="/biodiversitate" className="stiatica-link02 anchor">
              Biodiversitate
            </Link>
            <Link to="/problemeecologice" className="stiatica-link03 anchor">
              Probleme ecologice
            </Link>
            <Link to="/obiectiveturistice" className="stiatica-link04 anchor">
              Obiective turistice
            </Link>
            <Link to="/stiatica" className="stiatica-link05 anchor">
              Stiati ca?
            </Link>
          </div>
        </div>
        <div className="stiatica-right-side"></div>
        <div data-type="MobileMenu" className="stiatica-mobile-menu">
          <div className="stiatica-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="stiatica-image"
            />
            <div data-type="CloseMobileMenu" className="stiatica-close-menu">
              <svg viewBox="0 0 1024 1024" className="stiatica-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="stiatica-links-container">
            <a href="#resources" className="stiatica-link06 anchor">
              Resources
            </a>
            <a href="#inspiration" className="stiatica-link07 anchor">
              Inspiration
            </a>
            <span className="stiatica-link08 anchor">Process</span>
            <a href="#ourstory" className="stiatica-link09 anchor">
              Our story
            </a>
          </div>
        </div>
      </div>
      <div className="stiatica-features">
        <div className="stiatica-features1">
          <h1 className="stiatica-text"> Stiati ca ...</h1>
          <div className="stiatica-container3">
            <div className="stiatica-container4">
              <span className="stiatica-text01 card-Heading">
                Delta Dunarii este unica delta din lume, declarata rezervatie a
                biosferei
              </span>
            </div>
            <span className="stiatica-text02">
              In Delta Dunarii se intalneste cea mai mica densitate a populatiei
              din Romania, un locuitor la 30 de ha.
            </span>
          </div>
        </div>
        <div className="stiatica-container5">
          <div className="stiatica-container6">
            <span className="stiatica-text03">
              <span className="stiatica-text04"></span>
              <br></br>
              <span></span>
              <span>
                Cel mai mare mamifer din Delta este mistretul, care poate ajunge
                la o greutate de 200 kg. Cel mai mic mamifer din Delta este
                chitcanul.
              </span>
              <br></br>
              <span></span>
            </span>
          </div>
          <span className="stiatica-text10">
            <br></br>
            <span className="stiatica-text12">
              Cel mai mare fluture identificat in Delta este ochi de paun de
              noapte, care are o anvergura a aripilor de 18 cm.
            </span>
          </span>
          <span className="stiatica-text13 card-Heading">
            In Delta Dunarii intalnim cea mai compacta suprafata de stufaris de
            pe glob.
          </span>
          <span className="stiatica-text14">
            Cea mai insorita localitate a Romaniei este orasul Sulina. Aceasta
            localitate este situata la cea mai joasa altitudine din tara
            noastra.
          </span>
        </div>
      </div>
      <div className="stiatica-footer">
        <div className="stiatica-social-links">
          <a
            href="https://twitter.com/deltadunariiro"
            target="_blank"
            rel="noreferrer noopener"
            className="stiatica-link10"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="stiatica-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ARBDD/"
            target="_blank"
            rel="noreferrer noopener"
            className="stiatica-link11"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="stiatica-icon06"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/danubedelta/"
            target="_blank"
            rel="noreferrer noopener"
            className="stiatica-link12"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="stiatica-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
        <div className="stiatica-copyright-container">
          <svg viewBox="0 0 1024 1024" className="stiatica-icon10">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
          </svg>
          <span className="anchor">Copyright, 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Stiatica
