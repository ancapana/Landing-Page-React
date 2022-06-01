import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './istoric.css'

const Istoric = (props) => {
  return (
    <div className="istoric-container">
      <Helmet>
        <title>Istoric - Landing Page</title>
        <meta property="og:title" content="Istoric - Landing Page" />
      </Helmet>
      <div className="istoric-navbar">
        <Link to="/contact" className="istoric-cta-btn anchor button">
          CONTACT
        </Link>
        <div className="istoric-container1">
          <div className="istoric-left-side">
            <div data-type="BurgerMenu" className="istoric-burger-menu">
              <svg viewBox="0 0 1024 1024" className="istoric-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <Link to="/" className="istoric-link anchor">
              Acasa
            </Link>
            <Link to="/istoric" className="istoric-link01 anchor">
              Istoric
            </Link>
            <Link to="/biodiversitate" className="istoric-link02 anchor">
              Biodiversitate
            </Link>
            <Link to="/problemeecologice" className="istoric-link03 anchor">
              Probleme ecologice
            </Link>
            <Link to="/obiectiveturistice" className="istoric-link04 anchor">
              Obiective turistice
            </Link>
            <Link to="/stiatica" className="istoric-link05 anchor">
              Stiati ca?
            </Link>
          </div>
        </div>
        <div className="istoric-right-side"></div>
        <div data-type="MobileMenu" className="istoric-mobile-menu">
          <div className="istoric-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="istoric-image"
            />
            <div data-type="CloseMobileMenu" className="istoric-close-menu">
              <svg viewBox="0 0 1024 1024" className="istoric-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="istoric-links-container">
            <a href="#resources" className="istoric-link06 anchor">
              Resources
            </a>
            <a href="#inspiration" className="istoric-link07 anchor">
              Inspiration
            </a>
            <span className="istoric-link08 anchor">Process</span>
            <a href="#ourstory" className="istoric-link09 anchor">
              Our story
            </a>
          </div>
        </div>
      </div>
      <div className="istoric-banner">
        <h1 className="istoric-text">ISTORIC</h1>
      </div>
      <span className="istoric-text01">
        <span>
          {' '}
          Pana la sfârșitul secolului XIX , oceanograful si biologul Grigore
          Antipa (1867-1944) a avut grijă să dezvolte economia Deltei și
          conservarea mediului si resurselor sale, și prin redistribuirea cât
          mai echitabilă posibil a bogăției astfel create prin intermediul unui
          „Comitet de stat pentru pescuit” cooperativ, cu sediul central în
          Tulcea.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          Deși România nu a lipsit de terenuri agricole utile , regimul comunist
          din România , condus de ideologia „luptei omului nou pentru
          îmblânzirea pustiei”, a crezut că este necesar să „curățăm mlaștinile
          inutile și nesănătoase”. : liderii săi au acționat doar ca ingineri
          fără consultarea hidrologilor , limnologilor și ihtiologilor . Acest
          organism a impus în mod autorizat cote de captură foarte mari și
          obligatorii, dificil de atins și epuizând stocurile, s-a angajat să
          bareze și să dreneze canalele și să dreneze 700 km 2 de zone de
          inundații (aproximativ 15% din întreaga deltă: poldere din Sireasa,
          Pardina, Tătaru Baltenii de Jos și Dunavat).
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          Această politică, pe care nimeni nu o putea discuta fără a risca
          sancțiuni și închisoare, a fost accentuată sub președinția lui Nicolae
          Ceaușescu , distrugerea locurilor de reproducere , perturbarea
          rețelelor alimentare (care au determinat proliferarea muștelor de cai
          și a țânțarilor și prăbușirea capturilor de pescuit) și provocând un
          exod rural al locuitorilor deltei. În plus, aceste lucrări de
          recuperare a terenurilor au folosit, cu o mortalitate ridicată,
          prizonierii politici pe care regimul i-a deportat în lagărele
          „Sviștofca”, „Periprava” și „Cardon” (nord-estul Deltei României).
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          Cu toate acestea, în același timp, aproximativ douăzeci de zone,
          reprezentând și aproximativ 15% din deltă, au fost protejate prin
          rezervații naturale în care erau reglementate vânătoarea, pescuitul și
          turismul, precum și toate activitățile agricole (Capul Doloșman,
          Sacalin, coasta Zătoane, dune de Chituc și Lupi, iazuri de Belciug,
          Corbu-Nuntași, Nebunu, Potcoava, Răducu și Rotundu, păduri de Babadag,
          Caraorman, Codru, Erenciuc și Letea , zone mixte de Periteasca-
          Leahova, Roșca-Buhaiova , Vătafu-Lunguleț, dealurile Ghiunghiurmez și
          sărurile Murighiol).
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
          Odată cu căderea regimurilor comuniste din Europa , prăbușirea
          dictaturii în 1989 a dus la dizolvarea „Centralei”, dar „Autoritatea
          pentru pescuit” din Antipa nu a fost restabilită și statul și-a
          rezervat dreptul de a privatiza resursele delta după cum consideră
          potrivit . Nu pescarii locali, ci companiile mai mari (fabrici de
          conserve, agroalimentare, fabrici de hârtie care exploatează stuf și
          lansete Arundo donax ) au profitat.
        </span>
        <br></br>
        <span>
          Oamenii de știință, au militat pentru o revenire la metodele Antipa,
          adică în practică, pentru un program de „reconstrucție ecologică” care
          săpă diguri și restaureaza fauna. În acest context, a apărut crearea
          unei rezerve integrale pe întreaga întindere a deltei ar asigura
          posibilitatea de a face astfel de modificări în practici și politici,
          precum și oameni de știință, precum Mihai Băcescu , Traian Gomoiu,
          Gheorghe Buluță, Victor Petrescu, Alexandre Bologa sau Alexandre
          Marinescu din partea românească sau AN Voloshkevitch din partea
          ucraineană, au primit un sprijin neașteptat, dar puternic și
          binevenit: cel al exploratorului și cineastului francez Jacques-Yves
          Cousteau, care filma atunci filme în regiune: el a ascultat, a
          înregistrat, filmat, apoi a făcut lobby direct cu președintele și
          prim-ministrul român de atunci (respectiv Ion Iliescu și Petre Roman
          ), precum și cu Ucraina și ONU și a câștigat cazul. România a semnat
          Convenția Ramsar (datând din 1975) la25 ianuarie 1991.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          Delta a fost integrată în rețeaua Natura 2000 (situl SCI) și România,
          apoi Ucraina a semnat Convenția Ramsar , dar resursele financiare și
          materiale ale noii structuri fiind limitate, vechile practici nu au
          dispărut peste noapte și „restaurarea ecologică” doar treptat au
          afectat zonele umede distruse sub regimul comunist, din 1994.
          Majoritatea proiectelor nu depășesc 500 de hectare, dar sunt numeroase
          și, împreună, privesc mai mult de 15.000 de hectare.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          În ambele țări, locuitorii din Delta Dunării regretă, totuși, că
          aceste programe, care au readus producția ecologică, nu au fost
          însoțite de o restaurare a sistemului de pescuit cooperativ (anterior
          comunismului și datând din Antipa): totul a fost privatizat, predate
          investitorilor privați, adesea străini deltei, iar multe iazuri sunt
          acum inaccesibile pescarilor locali. În plus, braconajul este încă
          abundent: în general nu este vina locuitorilor, care ar risca amenzi
          grele de la gardienii rezervei, ci a unor personalități influente,
          întotdeauna însoțite de gărzi de corp, precum fostul ministru. Român
          Adrian Năstase împotriva pe care Societatea Ornitologică Română a
          depus o plângere pentru vânătoare ilegală. Aceste personalități au
          invitat clienții companiilor de safari de ultimă generație precum
          „Montefeltro” (Italia) și chiar condamnarea lor pentru corupție (2006)
          nu a oprit complet aceste practici.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span></span>
      </span>
      <span className="card-Heading">
        Zonele umede distruse sub regimul comunist
      </span>
      <img
        alt="image"
        src="/playground_assets/areas_polderised_under_ceausescu-600w.png"
        className="istoric-image1"
      />
      <div className="istoric-footer">
        <div className="istoric-social-links">
          <a
            href="https://twitter.com/deltadunariiro"
            target="_blank"
            rel="noreferrer noopener"
            className="istoric-link10"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="istoric-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ARBDD/"
            target="_blank"
            rel="noreferrer noopener"
            className="istoric-link11"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="istoric-icon06"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/danubedelta/"
            target="_blank"
            rel="noreferrer noopener"
            className="istoric-link12"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="istoric-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
        <div className="istoric-copyright-container">
          <svg viewBox="0 0 1024 1024" className="istoric-icon10">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
          </svg>
          <span className="anchor">Copyright, 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Istoric
