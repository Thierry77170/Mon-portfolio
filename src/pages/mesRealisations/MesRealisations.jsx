// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';

// Components
import Card from '../../components/card/Card.jsx'
import Button from '../../components/button/Button.jsx'
import IconRedux from '../../components/iconRedux/IconRedux.jsx'
import IconVSC from '../../components/iconVSC/IconVSC.jsx'
import IconSwagger from '../../components/iconSwagger/IconSwagger.jsx'

// React 
import { useState, useEffect } from 'react';

// Variables
import works from '../../datas/works.js';
import leftArrow from '../../img/leftArrow.png';
import rightArrow from '../../img/rightArrow.png';

// Style
import './mesRealisations.css'

function MesRealisations() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentAltIndex, setCurrentAltIndex] = useState(0);
    const [currentHrefIndex, setCurrentHrefIndex] = useState(0);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentIcon1Index, setCurrentIcon1Index] = useState(0);
    const [currentIcon2Index, setCurrentIcon2Index] = useState(0);
    const [currentIcon3Index, setCurrentIcon3Index] = useState(0);
    const [currentIcon4Index, setCurrentIcon4Index] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex + 1) % works.length);
        setCurrentAltIndex((altIndex) => (altIndex + 1) % works.length);
        setCurrentHrefIndex((hrefIndex) => (hrefIndex + 1) % works.length);
        setCurrentTitleIndex((titleIndex) => (titleIndex + 1) % works.length);
        setCurrentTextIndex((textIndex) => (textIndex + 1) % works.length);
        setCurrentIcon1Index((icon1Index) => (icon1Index + 1) % works.length);
        setCurrentIcon2Index((icon2Index) => (icon2Index + 1) % works.length);
        setCurrentIcon3Index((icon3Index) => (icon3Index + 1) % works.length);
        setCurrentIcon4Index((icon4Index) => (icon4Index + 1) % works.length);
    }
    const prevSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex - 1 + works.length) % works.length);
        setCurrentAltIndex((altIndex) => (altIndex - 1 + works.length) % works.length);
        setCurrentHrefIndex((hrefIndex) => (hrefIndex - 1 + works.length) % works.length);
        setCurrentTitleIndex((titleIndex) => (titleIndex - 1 + works.length) % works.length);
        setCurrentTextIndex((textIndex) => (textIndex - 1 + works.length) % works.length);
        setCurrentIcon1Index((icon1Index) => (icon1Index - 1 + works.length) % works.length);
        setCurrentIcon2Index((icon2Index) => (icon2Index - 1 + works.length) % works.length);
        setCurrentIcon3Index((icon3Index) => (icon3Index - 1 + works.length) % works.length);
        setCurrentIcon4Index((icon4Index) => (icon4Index - 1 + works.length) % works.length);
    }
    
    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <main>
            <section >
                <div className={`containerMain ${visibleClass}`}>
                    <article  className="containerButton">
                        <a href="#competences">
                            <Button title="Mes compétences" />
                        </a>
                    </article>
                    
                    <article className='containerMesRealisations'>
                        <Card 
                            src={works[currentImageIndex]["image"]}
                            alt={works[currentAltIndex]["alt"]}
                            numberImg={currentImageIndex + 1}
                            ImgTotal={works.length}
                            href={works[currentHrefIndex]["lien"]}
                            title={works[currentTitleIndex]["title"]}
                            text={works[currentTextIndex]["text"]}
                            icon1={works[currentIcon1Index]["icon1"]}
                            icon2={works[currentIcon2Index]["icon2"]}
                            icon3={works[currentIcon3Index]["icon3"]}
                            icon4={works[currentIcon4Index]["icon4"]}
                        /> 
                        <div className='containerMesRealisations__containerArrow'>
                            <img 
                                src={leftArrow} 
                                alt="flèche gauche" 
                                className='containerMesRealisations__containerArrow--arrowLeft' 
                                onClick={prevSlide}
                            />
                            <img 
                                src={rightArrow} 
                                alt="flèche droite" 
                                className='containerMesRealisations__containerArrow--arrowRight' 
                                onClick={nextSlide}
                            />
                        </div>
                    </article>
                    <article className="containerCompetences">
                        <h2 id="competences" className="containerCompetences__title">
                            Mes compétences
                        </h2>
                        <ul className="containerCompetences__containerIcons">
                            <li key="html5-icon" className="containerCompetences__containerIcons--icon">
                                <FontAwesomeIcon className='iconCompetence' icon={faHtml5} size="3x" style={{ width: '51px', height: '66px' }} color="#e34c26" />
                                <p className='textIcon'>HTML 5</p>
                            </li>
                            <li key="css3-icon" className="containerCompetences__containerIcons--icon">
                                <FontAwesomeIcon icon={faCss3} size="3x" style={{ width: '66px', height: '66px' }} color="#1572b6" />
                                <p className='textIcon'>CSS 3</p>
                            </li>
                            <li key="js-icon" className="containerCompetences__containerIcons--icon">
                                <FontAwesomeIcon className='iconCompetence' icon={faJs} size="3x" style={{ width: '66px', height: '66px', backgroundColor: '#ffffff', borderRadius: '50%', padding: '0px'}} color="#ffd60a" />
                                <p className='textIcon'>JavaScript</p>
                            </li>
                            <li key="react-icon" className="containerCompetences__containerIcons--icon">
                                <FontAwesomeIcon className='iconCompetence' icon={faReact} size="2x" style={{ width: '54px', height: '54px', backgroundColor: 'rgb(8, 8, 143)', borderRadius: '50%', padding: '6px'}} color="#ffffff" />
                                <p className='textIcon'>Reacr.js</p>
                            </li>
                            <li key="redux-icon" className="containerCompetences__containerIcons--icon">
                            <IconRedux className="iconReduxCompetence" />
                                <p className='textIcon'>Redux</p>
                            </li>
                        </ul>
                        <h2 className="containerCompetences__title">
                            Les outils que j'utilise 
                        </h2>
                        <ul className="containerCompetences__containerIcons">
                            <li key="vsc-icon" className="containerCompetences__containerIcons--icon">
                                <IconVSC />
                                <p className='textIcon'>VS code</p>
                            </li>
                            <li key="chromeDevTools-icon" className="containerCompetences__containerIcons--icon">
                                <FontAwesomeIcon icon={faChrome} size="3x" style={{ color: '#4285F4', width: '66px', height: '66px' }} />
                                <p className='textIcon'>Chrome DevTools</p>
                            </li>
                            <li key="git-icon" className="containerCompetences__containerIcons--icon">
                            <FontAwesomeIcon icon={faGit} size="3x" style={{ backgroundColor: '#ffffff', width: '66px', height: '66px', borderRadius: '50%', padding: '0px' }} color="#f05032" />
                                <p className='textIcon'>Git</p>
                            </li>
                            <li key="github-icon" className="containerCompetences__containerIcons--icon">
                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#000000', width: '66px', height: '66px' }} className='iconGitHub' />
                                <p className='textIcon'>GitHub</p>
                            </li>
                            <li key="sass-icon" className="containerCompetences__containerIcons--icon">
                                <FontAwesomeIcon icon={faSass} size="3x" style={{ color: '#cc6699', width: '66px', height: '66px' }} /> 
                                <p className='textIcon'>Sass</p>
                            </li>
                            <li key="swagger-icon" className="containerCompetences__containerIcons--icon">
                            <IconSwagger />
                                <p className='textIcon'>Swagger</p>
                            </li>
                            
                        </ul>
                    </article>
                 </div>
            </section>  
        </main>
    );
}

export default MesRealisations;