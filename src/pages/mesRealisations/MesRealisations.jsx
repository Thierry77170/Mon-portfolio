// React 
import { useState, useEffect } from 'react';

// Components
import Card from '../../components/card/Card.jsx'

// Variables
import argentBank from '../../img/ArgentBank.webp'
import works from '../../datas/works.json';
//import leftArrow from '../../img/leftArrow.png';
//import rightArrow from '../../img/rightArrow.png';

// Style
import './mesRealisations.css'

function MesRealisations() {

    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    const argentBankWork = works.find(work => work.id === "argentBank" ); 

    return (
        <main>
            <section className={`containerMesRealisations ${visibleClass}`}>
                <Card 
                    src={argentBank}
                    alt="image du projet Argent Bank"
                    href={argentBankWork.lien}
                    title={argentBankWork.title}
                    text={argentBankWork.text}         
                    className="containerMesRealisations__work"          
                 />
            </section>  
        </main>
    );
}

export default MesRealisations;