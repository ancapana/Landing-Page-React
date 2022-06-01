import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './biodiversitate.css'

const Biodiversitate = (props) => {
  return (
    <div className="biodiversitate-container">
      <Helmet>
        <title>Biodiversitate - Landing Page</title>
        <meta property="og:title" content="Biodiversitate - Landing Page" />
      </Helmet>
      <div className="biodiversitate-navbar">
        <Link to="/contact" className="biodiversitate-cta-btn anchor button">
          CONTACT
        </Link>
        <div className="biodiversitate-container1">
          <div className="biodiversitate-left-side">
            <div data-type="BurgerMenu" className="biodiversitate-burger-menu">
              <svg viewBox="0 0 1024 1024" className="biodiversitate-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <Link to="/" className="biodiversitate-link anchor">
              Acasa
            </Link>
            <Link to="/istoric" className="biodiversitate-link01 anchor">
              Istoric
            </Link>
            <Link to="/biodiversitate" className="biodiversitate-link02 anchor">
              Biodiversitate
            </Link>
            <Link
              to="/problemeecologice"
              className="biodiversitate-link03 anchor"
            >
              Probleme ecologice
            </Link>
            <Link
              to="/obiectiveturistice"
              className="biodiversitate-link04 anchor"
            >
              Obiective turistice
            </Link>
            <Link to="/stiatica" className="biodiversitate-link05 anchor">
              Stiati ca?
            </Link>
          </div>
        </div>
        <div className="biodiversitate-right-side"></div>
        <div data-type="MobileMenu" className="biodiversitate-mobile-menu">
          <div className="biodiversitate-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="biodiversitate-image"
            />
            <div
              data-type="CloseMobileMenu"
              className="biodiversitate-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="biodiversitate-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="biodiversitate-links-container">
            <a href="#resources" className="biodiversitate-link06 anchor">
              Resources
            </a>
            <a href="#inspiration" className="biodiversitate-link07 anchor">
              Inspiration
            </a>
            <span className="biodiversitate-link08 anchor">Process</span>
            <a href="#ourstory" className="biodiversitate-link09 anchor">
              Our story
            </a>
          </div>
        </div>
      </div>
      <div className="biodiversitate-hero">
        <div className="biodiversitate-container3">
          <h1 className="biodiversitate-text">BIODIVERSITATE</h1>
          <span className="biodiversitate-text01">
            <span>
              <span>
                Delta Dunării este încadrată în regiunea biogeografică panonică
                și stepică a Dobrogei și prezintă o arie naturală cu o
                diversitate floristică și faunistică ridicată, exprimată atât la
                nivel de specii cât și la nivel de ecosisteme terestre și
                acvatice.
              </span>
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/little-egret-5791507-1200w.jpg"
          className="biodiversitate-image1"
        />
      </div>
      <div className="biodiversitate-banner">
        <div className="biodiversitate-container4">
          <h1 className="biodiversitate-text04">
            <span>Habitate</span>
          </h1>
          <span className="biodiversitate-text06">
            <span></span>
            <br></br>
            <span>
              {' '}
              În arealul deltei au fost identificate 29 de tipuri de habitate de
              interes comunitar; printre care numaram:
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
              - Ape stătătoare oligotrofe până la mezotrofe cu vegetație din
              Littorelletea uniflorae și/sau Isoëto-Nanojuncetea;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Ape puternic oligo-mezotrofe cu vegetație bentonică de specii de
              Chara;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Bancuri de nisip acoperite permanent de un strat mic de apă de
              mare,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Comunități cu salicornia și alte specii anuale care colonizează
              terenurile umede și nisipoase;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Comunități de lizieră cu ierburi înalte higrofile de la nivelul
              câmpiilor, până la cel montan și alpin;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Cursuri de apă din zonele de câmpie, până la cele montane, cu
              vegetație din Ranunculion fluitantis și Callitricho-Batrachion;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Dune cu Hippophae rhamnoides;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Depresiuni umede intradunale;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Galerii ripariene și tufărișuri (Nerio-Tamaricetea și
              Securinegion tinctoriae);
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Lacuri eutrofe naturale cu vegetație tip Magnopotamion sau
              Hydrocharition; Lacuri distrofice și iazuri, Lagune costiere;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Mlaștini calcaroase cu Cladium mariscus;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Tufărișuri de foioase ponto-sarmatice; Vegetație forestieră
              ponto-sarmatică de stejar pufos și Zăvoaie cu Salix alba și
              Populus alba.
            </span>
            <br></br>
            <span></span>
            <span>​</span>
            <br></br>
            <span></span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/danube-2529572-800h.jpg"
          className="biodiversitate-image2"
        />
      </div>
      <div className="biodiversitate-hero1">
        <img
          alt="image"
          src="/playground_assets/800px-utriculariavulgarisflowering-700h.jpg"
          className="biodiversitate-image3"
        />
        <div className="biodiversitate-container5">
          <h1 className="biodiversitate-text26">Flora</h1>
          <span className="biodiversitate-text27">
            <span>
              Flora Deltei este reprezentată în mare parte de o vegetație
              specifică zonelor umede (stuful, papura, rogozul, în amestec cu
              salcia pitică) și ocupă 78% din totalul suprafeței. Zăvoaiele
              ocupă 6% din suprafața deltei, fiind păduri de salcie, frasin,
              arin, plop, care cresc pe grindurile fluviatile, fiind periodic
              inundate, iar ochiurile de apă sunt acoperite de o vegetație
              acvatică și plutitoare, ocupând 2% din suprafața deltei. De
              asemenea, există păduri (Pădurea Letea și Pădurea Caraorman)
              alcătuite din arbori (stejar brumăriu, stejar pedunculat, frasin,
              plop tremurător, ulm), arbusti (zălog, cătină roșie) și plante
              agățătoare (hamei, curpen, viță sălbatică).
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              La nivelul ierburilor sunt întâlnite elemente floristice
              (meridional-continentale și xero-mezofile) din specii rare printre
              care unele protejate la nivel european prin Directiva 92/43/CE
              (anexa I-a) din 21 mai 1992 (privind conservarea habitatelor
              naturale și a speciilor de faună și floră sălbatică); astfel:
              centaurea (Centaurea jankae aflată pe lista roșie a IUCN,
              capul-șarpelui (Echium russicum), otrățelul bălților (Aldrovanda
              vesiculosa), trifoiașul-de-baltă (Marsilea quadrifolia),
              ciucușoară de nisip (Alyssum borzaeanum), nufăr galben (Nuphar
              lutea), nufăr alb (Nymphaea alba), obligeană (Acorus calamus),
              piciorul cocoșului (Ranunculus repens), valior (Euphorbia peplis),
              cârcel (Ephedra distachia), pelin (Artemisia tschernieviana).
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
      </div>
      <div className="biodiversitate-hero2">
        <div className="biodiversitate-container6">
          <h1 className="biodiversitate-text33">Fauna</h1>
          <span className="biodiversitate-text34">
            <span></span>
            <br></br>
            <span>
              Delta Dunării conține mai mult de 360 de specii de păsări și 45 de
              specii de pește de apă dulce în numeroasele sale lacuri și japșe.
              Acesta este locul unde milioane de păsări din diferite colțuri ale
              Pământului (Europa, Asia, Africa, Marea Mediterană) vin să
              cuibărească. Speciile majore de pești în cadrul Deltei Dunării
              sunt știuca și somnul. Fauna deltei este una bogată și variată în
              specii de mamifere, păsări, reptile, amfibieni, pești, crustacee,
              melci, moluște și insecte; dintre care unele protejate prin
              aceeași Directivă a Consiliului European (privind conservarea
              habitatelor naturale și a speciilor de faună și floră sălbatică)
              sau aflate pe lista roșie a IUCN.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Suprafața mică de uscat, a făcut ca aici să se concentreze o faună
              preponderent reprezentată de pești, amfibieni, reptile și păsări.
              Noaptea răsună de zgomotul amfibienilor, aici găsindu-se nu mai
              puțin de 10 specii, printre care: broasca râioasă verde, broasca
              de lac mare, broasca râioasă brună, buhaiul de baltă sau
              brotăcelul de copac. Fauna piscicolă este reprezentată de o
              varietate de pești, 133 de specii, dintre care 66 se întâlnite
              doar în apele saline: hamsia, calcanul sau stavridul; 54 de specii
              trăiesc în apele dulci: somnul, linul, bibanul, crapul, avatul,
              șalăul, știuca și 13 de specii care trăiesc și în apele sărate și
              în cele dulci: sturionii (păstruga, cega, morunul, nisetrul),
              scrumbia etc.
            </span>
            <br></br>
            <span>
              În ceea ce privește mamiferele prezente în arealul Deltei, găsim
              54 de specii, care pot fi întâlnite preponderent în zonele mai
              izolate de uscat sau în cele mlăștinoase. Dintre acestea amintim:
              hermina, câinele enot, bizamul, vulpea, vidra, nurca europeană,
              pisica sălbatică, mistrețul, castorul etc.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Cu siguranță cel mai mare spectacol oferit de Deltă este cel dat
              de păsări, nu mai puțin de 331 de specii. Dintre acestea
              aproximativ 130 sunt migratoare. Pe lângă păsările mai cunoscute
              și mai comune care pot fi regăsite aici (diferite specii de rațe
              și gâște, stârci, egrete, lebede, cormorani, pescăruși și alte
              păsări specifice zonelor umede), în Deltă se întâlnesc și specii
              mai rare și mai puțin prezente în alte zone din România, cum ar fi
              țigănușul, lopătarul, ciocântorsul, piciorongul, alături de specii
              mai rare de gâscă cum ar fi gâsca cu gât roșu (50% din populația
              mondială), specii rare de răpitoare sau cormoranul mic (60% din
              populația mondială).
            </span>
            <br></br>
            <span></span>
            <span></span>
            <br></br>
            <span>
              Mamifere: Mistreț, enot. vidră de râu, bizam, nurcă europeană,
              hermină mică, nevăstuică , dihor pătat, șacal auriu , iepure de
              câmp, popândău european ), dihorul de stepă, arici , chițcan de
              pădure, chițcan mic de apă, șoarecele-de-mișună, șoarece pitic.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Păsări: acvilă-țipătoare-mică, fluierar de munte, ciocârlia de
              câmp, rață sulițar, gâscă de vară, drepneaua mare, stârc cenușiu,
              rață cu cap castaniu, pescăruș albastru, rață roșie, porumbel de
              scorbură, lebădă de vară, cocor, sitar de mâl, grelușelul de stuf,
              sfrâncioc roșiatic, sfrânciocul cu frunte neagră, pescăruș cu cioc
              subțire pescăruș mic, sitarul de mal nordic, ciocârlie de Bărăgan,
              culic cu cioc subțire etc.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Pești: Tigănuș, ghiborț de râu, scrumbie de Dunăre, morunaș,
              șalău, biban, văduviță, cernușcă, știucă de Amur, caracudă, lin,
              biban, plătică, caracudă argintie.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Reptile și amfibieni: Vipera de stepă, șarpele de alun, șopârla
              multicoloră, șopârla de câmp, șopârla cenușie, țestoasa de baltă,
              țestoasa dobrogeană de uscat, tritonul cu creastă danubian,
              tritonul comun transilvănean, buhaiul de baltă cu burtă roșie,
              brotacul verde de copac.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Nevertebrate: În rezervație este semnalată prezența mai multor
              nevertebrate rare (melci, gândaci, libelule, fluturi); printre
              care: melcul acvatic dungat, melcul cu cârlig, gândacul de apă,
              croitorul mare al stejarului, două libelule din speciile
              Ophiogomphus cecilia și Arytrura musculus; și cinci fluturi:
              Colias myrmidone, Leptidea morsei (fluturele de muștar), Lycaena
              dispar (fluturele purpuriu), Catopta thrips (fluturele de stepă)
              și Coenagrion ornatum (albilița portocalie).
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className="biodiversitate-container7">
          <img
            alt="image"
            src="/playground_assets/raccoon-dog-5791402_640-600h.jpg"
            className="biodiversitate-image4"
          />
          <img
            alt="image"
            src="/playground_assets/little-egret-5791507-1200w.jpg"
            className="biodiversitate-image5"
          />
          <img
            alt="image"
            src="/playground_assets/great-white-pelicans-5791396-600h.jpg"
            className="biodiversitate-image6"
          />
          <img
            alt="image"
            src="/playground_assets/frog-5812244-500h.jpg"
            className="biodiversitate-image7"
          />
        </div>
      </div>
      <div className="biodiversitate-footer">
        <div className="biodiversitate-social-links">
          <a
            href="https://twitter.com/deltadunariiro"
            target="_blank"
            rel="noreferrer noopener"
            className="biodiversitate-link10"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="biodiversitate-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ARBDD/"
            target="_blank"
            rel="noreferrer noopener"
            className="biodiversitate-link11"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="biodiversitate-icon06"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/danubedelta/"
            target="_blank"
            rel="noreferrer noopener"
            className="biodiversitate-link12"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="biodiversitate-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
        <div className="biodiversitate-copyright-container">
          <svg viewBox="0 0 1024 1024" className="biodiversitate-icon10">
            <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
          </svg>
          <span className="anchor">Copyright, 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Biodiversitate
