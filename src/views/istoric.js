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
          Pana la sf??r??itul secolului XIX , oceanograful si biologul Grigore
          Antipa (1867-1944) a avut grij?? s?? dezvolte economia Deltei ??i
          conservarea mediului si resurselor sale, ??i prin redistribuirea c??t
          mai echitabil?? posibil a bog????iei astfel create prin intermediul unui
          ???Comitet de stat pentru pescuit??? cooperativ, cu sediul central ??n
          Tulcea.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          De??i Rom??nia nu a lipsit de terenuri agricole utile , regimul comunist
          din Rom??nia , condus de ideologia ???luptei omului nou pentru
          ??mbl??nzirea pustiei???, a crezut c?? este necesar s?? ???cur??????m mla??tinile
          inutile ??i nes??n??toase???. : liderii s??i au ac??ionat doar ca ingineri
          f??r?? consultarea hidrologilor , limnologilor ??i ihtiologilor . Acest
          organism a impus ??n mod autorizat cote de captur?? foarte mari ??i
          obligatorii, dificil de atins ??i epuiz??nd stocurile, s-a angajat s??
          bareze ??i s?? dreneze canalele ??i s?? dreneze 700 km 2 de zone de
          inunda??ii (aproximativ 15% din ??ntreaga delt??: poldere din Sireasa,
          Pardina, T??taru Baltenii de Jos ??i Dunavat).
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
          Aceast?? politic??, pe care nimeni nu o putea discuta f??r?? a risca
          sanc??iuni ??i ??nchisoare, a fost accentuat?? sub pre??edin??ia lui Nicolae
          Ceau??escu , distrugerea locurilor de reproducere , perturbarea
          re??elelor alimentare (care au determinat proliferarea mu??telor de cai
          ??i a ????n??arilor ??i pr??bu??irea capturilor de pescuit) ??i provoc??nd un
          exod rural al locuitorilor deltei. ??n plus, aceste lucr??ri de
          recuperare a terenurilor au folosit, cu o mortalitate ridicat??,
          prizonierii politici pe care regimul i-a deportat ??n lag??rele
          ???Svi??tofca???, ???Periprava??? ??i ???Cardon??? (nord-estul Deltei Rom??niei).
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          Cu toate acestea, ??n acela??i timp, aproximativ dou??zeci de zone,
          reprezent??nd ??i aproximativ 15% din delt??, au fost protejate prin
          rezerva??ii naturale ??n care erau reglementate v??n??toarea, pescuitul ??i
          turismul, precum ??i toate activit????ile agricole (Capul Dolo??man,
          Sacalin, coasta Z??toane, dune de Chituc ??i Lupi, iazuri de Belciug,
          Corbu-Nunta??i, Nebunu, Potcoava, R??ducu ??i Rotundu, p??duri de Babadag,
          Caraorman, Codru, Erenciuc ??i Letea , zone mixte de Periteasca-
          Leahova, Ro??ca-Buhaiova , V??tafu-Lungule??, dealurile Ghiunghiurmez ??i
          s??rurile Murighiol).
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
          Odat?? cu c??derea regimurilor comuniste din Europa , pr??bu??irea
          dictaturii ??n 1989 a dus la dizolvarea ???Centralei???, dar ???Autoritatea
          pentru pescuit??? din Antipa nu a fost restabilit?? ??i statul ??i-a
          rezervat dreptul de a privatiza resursele delta dup?? cum consider??
          potrivit . Nu pescarii locali, ci companiile mai mari (fabrici de
          conserve, agroalimentare, fabrici de h??rtie care exploateaz?? stuf ??i
          lansete Arundo donax ) au profitat.
        </span>
        <br></br>
        <span>
          Oamenii de ??tiin????, au militat pentru o revenire la metodele Antipa,
          adic?? ??n practic??, pentru un program de ???reconstruc??ie ecologic????? care
          s??p?? diguri ??i restaureaza fauna. ??n acest context, a ap??rut crearea
          unei rezerve integrale pe ??ntreaga ??ntindere a deltei ar asigura
          posibilitatea de a face astfel de modific??ri ??n practici ??i politici,
          precum ??i oameni de ??tiin????, precum Mihai B??cescu , Traian Gomoiu,
          Gheorghe Bulu????, Victor Petrescu, Alexandre Bologa sau Alexandre
          Marinescu din partea rom??neasc?? sau AN Voloshkevitch din partea
          ucrainean??, au primit un sprijin nea??teptat, dar puternic ??i
          binevenit: cel al exploratorului ??i cineastului francez Jacques-Yves
          Cousteau, care filma atunci filme ??n regiune: el a ascultat, a
          ??nregistrat, filmat, apoi a f??cut lobby direct cu pre??edintele ??i
          prim-ministrul rom??n de atunci (respectiv Ion Iliescu ??i Petre Roman
          ), precum ??i cu Ucraina ??i ONU ??i a c????tigat cazul. Rom??nia a semnat
          Conven??ia Ramsar (dat??nd din 1975) la25 ianuarie 1991.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          Delta a fost integrat?? ??n re??eaua Natura 2000 (situl SCI) ??i Rom??nia,
          apoi Ucraina a semnat Conven??ia Ramsar , dar resursele financiare ??i
          materiale ale noii structuri fiind limitate, vechile practici nu au
          disp??rut peste noapte ??i ???restaurarea ecologic????? doar treptat au
          afectat zonele umede distruse sub regimul comunist, din 1994.
          Majoritatea proiectelor nu dep????esc 500 de hectare, dar sunt numeroase
          ??i, ??mpreun??, privesc mai mult de 15.000 de hectare.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          ??n ambele ????ri, locuitorii din Delta Dun??rii regret??, totu??i, c??
          aceste programe, care au readus produc??ia ecologic??, nu au fost
          ??nso??ite de o restaurare a sistemului de pescuit cooperativ (anterior
          comunismului ??i dat??nd din Antipa): totul a fost privatizat, predate
          investitorilor priva??i, adesea str??ini deltei, iar multe iazuri sunt
          acum inaccesibile pescarilor locali. ??n plus, braconajul este ??nc??
          abundent: ??n general nu este vina locuitorilor, care ar risca amenzi
          grele de la gardienii rezervei, ci a unor personalit????i influente,
          ??ntotdeauna ??nso??ite de g??rzi de corp, precum fostul ministru. Rom??n
          Adrian N??stase ??mpotriva pe care Societatea Ornitologic?? Rom??n?? a
          depus o pl??ngere pentru v??n??toare ilegal??. Aceste personalit????i au
          invitat clien??ii companiilor de safari de ultim?? genera??ie precum
          ???Montefeltro??? (Italia) ??i chiar condamnarea lor pentru corup??ie (2006)
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
