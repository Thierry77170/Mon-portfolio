// React 
import { useState, useEffect } from 'react';

// Components
import Card from '../../components/card/Card.jsx'

// Variables
import argentBank from '../../img/ArgentBank.webp'

// Style
import './mesRealisations.css'

function MesRealisations() {

    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <main>
            <section>
                <div className={`containerMesRealisations ${visibleClass}`}>
                    <Card 
                        src={argentBank}
                        alt="image du projet Argent Bank"
                        title="Argent Bank" 
                    />
                </div>
            </section>
        </main>
    );
}

export default MesRealisations;