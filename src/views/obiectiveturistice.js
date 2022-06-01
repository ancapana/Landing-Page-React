import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './obiectiveturistice.css'

const Obiectiveturistice = (props) => {
  return (
    <div className="obiectiveturistice-container">
      <Helmet>
        <title>Obiective turistice - Landing Page</title>
        <meta
          property="og:title"
          content="Obiective turistice - Landing Page"
        />
      </Helmet>
      <div className="obiectiveturistice-navbar">
        <Link
          to="/contact"
          className="obiectiveturistice-cta-btn button anchor"
        >
          CONTACT
        </Link>
        <div className="obiectiveturistice-container1">
          <div className="obiectiveturistice-left-side">
            <div
              data-type="BurgerMenu"
              className="obiectiveturistice-burger-menu"
            >
              <svg viewBox="0 0 1024 1024" className="obiectiveturistice-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <Link to="/" className="obiectiveturistice-link anchor">
              Acasa
            </Link>
            <Link to="/istoric" className="obiectiveturistice-link01 anchor">
              Istoric
            </Link>
            <Link
              to="/biodiversitate"
              className="obiectiveturistice-link02 anchor"
            >
              Biodiversitate
            </Link>
            <Link
              to="/problemeecologice"
              className="obiectiveturistice-link03 anchor"
            >
              Probleme ecologice
            </Link>
            <Link
              to="/obiectiveturistice"
              className="obiectiveturistice-link04 anchor"
            >
              Obiective turistice
            </Link>
            <Link to="/stiatica" className="obiectiveturistice-link05 anchor">
              Stiati ca?
            </Link>
          </div>
        </div>
        <div className="obiectiveturistice-right-side"></div>
        <div data-type="MobileMenu" className="obiectiveturistice-mobile-menu">
          <div className="obiectiveturistice-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="obiectiveturistice-image"
            />
            <div
              data-type="CloseMobileMenu"
              className="obiectiveturistice-close-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="obiectiveturistice-icon02"
              >
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="obiectiveturistice-links-container">
            <a href="#resources" className="obiectiveturistice-link06 anchor">
              Resources
            </a>
            <a href="#inspiration" className="obiectiveturistice-link07 anchor">
              Inspiration
            </a>
            <span className="obiectiveturistice-link08 anchor">Process</span>
            <a href="#ourstory" className="obiectiveturistice-link09 anchor">
              Our story
            </a>
          </div>
        </div>
      </div>
      <div className="obiectiveturistice-hero">
        <div className="obiectiveturistice-container3">
          <h1 className="obiectiveturistice-text">OBIECTIVE TURISTICE</h1>
          <span className="obiectiveturistice-text01">
            <span>
              Pe teritoriul și în vecinătatea parcului național se află mai
              multe obiective de interes turistic (lăcașuri de cult, monumente
              istorice, situri arheologice, arii protejate, zone naturale);
              astfel:
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              - Biserica ortodoxă „Buna Vestire” din Tulcea, construcție 1869,
              monument istoric.
            </span>
            <br></br>
            <span>- Mănăstirea și castrul roman Halmyris de la Murighiol.</span>
            <br></br>
            <span>
              - Moscheea Azizyie (Geamia Sultanului Abdulaziz) din Tulcea,
              lăcașul de cult reprezentativ al comunității musulmane construit
              în anul 1863, monument istoric.
            </span>
            <br></br>
            <span>
              - Așezarea greco-indigenă din satul Sălcioara (sit arheologic).
            </span>
            <br></br>
            <span>
              - Cetatea Argamum - Orgame, sit arheologic aflat în partea de est
              a județului Tulcea, pe teritoriul administrativ al comunei
              Jurilovca, în locul numit Capul Doloșman. Acesta este localizat la
              contactul dintre Podișul Babadagului și Limanul Razim care, în
              Antichitate, era un golf deschis al mării Negre (golful Argamon).
            </span>
            <br></br>
            <span>
              - Histria, cetate grecească (ruine) aflată pe teritoriul
              administrativ al comunei Istria, în județul Constanța; cel mai
              vechi oraș atestat de pe actualul teritoriu al României.
            </span>
            <br></br>
            <span>- Situl arheologic de la Vișina.</span>
            <br></br>
            <span>- Munții Măcinului</span>
            <br></br>
            <span>- Marea Neagră</span>
            <br></br>
            <span>
              - Complexul lagunar Razim-Sinoe (Limanele Dobrogene) constituit
              din cele două unități: Unitatea Razim cu lacurile Golovița,
              Zmeica, Babadag, Tauc, Topraichioi și cel omonim; și Unitatea
              Sinoe ce cuprinde lacurile Nuntași, Tuzla și Sinoe
            </span>
            <br></br>
            <span>
              - Cimitirul cosmopolit din Sulina, un cimitir în care sunt
              înmormântați marinari din toată lumea, victime de naufragiu și
              chiar pirați. Există mormântul unui pirat fără nume, sunt
              mormintele îndrăgostiților înecați, al unei prințese și multe alte
              locuri de veci pline de poveste.
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className="obiectiveturistice-container4">
          <div className="obiectiveturistice-container5">
            <img
              alt="image"
              src="/playground_assets/646x404-300h.jpg"
              className="obiectiveturistice-image1"
            />
            <img
              alt="image"
              src="/playground_assets/romania-2739007-300h.jpg"
              className="obiectiveturistice-image2"
            />
          </div>
        </div>
      </div>
      <div className="obiectiveturistice-hero1">
        <h1 className="obiectiveturistice-text17">
          <span>Cautati cazare in Delta Dunarii</span>
        </h1>
        <div className="obiectiveturistice-btn-group">
          <a
            href="https://www.booking.com/searchresults.ro.html?dest_id=2986;dest_type=region"
            target="_blank"
            rel="noreferrer noopener"
            className="obiectiveturistice-link10 button"
          >
            CLICK AICI
          </a>
        </div>
      </div>
      <div className="obiectiveturistice-footer">
        <div className="obiectiveturistice-social-links">
          <a
            href="https://twitter.com/deltadunariiro"
            target="_blank"
            rel="noreferrer noopener"
            className="obiectiveturistice-link11"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="obiectiveturistice-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ARBDD/"
            target="_blank"
            rel="noreferrer noopener"
            className="obiectiveturistice-link12"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="obiectiveturistice-icon06"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/danubedelta/"
            target="_blank"
            rel="noreferrer noopener"
            className="obiectiveturistice-link13"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="obiectiveturistice-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
        <div className="obiectiveturistice-copyright-container">
          <svg viewBox="0 0 1024 1024" className="obiectiveturistice-icon10">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
          </svg>
          <span className="anchor">Copyright, 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Obiectiveturistice
