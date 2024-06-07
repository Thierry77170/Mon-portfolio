// FontAwesome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faReact } from '@fortawesome/free-brands-svg-icons';

// React 
import { useState, useEffect } from 'react';

// Components
import Card from '../../components/card/Card.jsx'

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

    const nextSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex + 1) % works.length);
        setCurrentAltIndex((altIndex) => (altIndex + 1) % works.length);
        setCurrentHrefIndex((hrefIndex) => (hrefIndex + 1) % works.length);
        setCurrentTitleIndex((titleIndex) => (titleIndex + 1) % works.length);
        setCurrentTextIndex((textIndex) => (textIndex + 1) % works.length);
        setCurrentIcon1Index((icon1Index) => (icon1Index + 1) % works.length);
        setCurrentIcon2Index((icon2Index) => (icon2Index + 1) % works.length);
    }
    const prevSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex - 1 + works.length) % works.length);
        setCurrentAltIndex((altIndex) => (altIndex - 1 + works.length) % works.length);
        setCurrentHrefIndex((hrefIndex) => (hrefIndex - 1 + works.length) % works.length);
        setCurrentTitleIndex((titleIndex) => (titleIndex - 1 + works.length) % works.length);
        setCurrentTextIndex((textIndex) => (textIndex - 1 + works.length) % works.length);
        setCurrentIcon1Index((icon1Index) => (icon1Index - 1 + works.length) % works.length);
        setCurrentIcon2Index((icon2Index) => (icon2Index - 1 + works.length) % works.length);
    }
    
    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <main>
            <section className={`containerMesRealisations ${visibleClass}`}>
                <Card 
                    src={works[currentImageIndex]["image"]}
                    alt={works[currentAltIndex]["alt"]}
                    href={works[currentHrefIndex]["lien"]}
                    title={works[currentTitleIndex]["title"]}
                    text={works[currentTextIndex]["text"]}
                    icon1={works[currentIcon1Index]["icon1"]}
                    icon2={works[currentIcon1Index]["icon2"]}
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
            </section>  
        </main>
    );
}

export default MesRealisations;