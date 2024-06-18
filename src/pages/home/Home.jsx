// React 
import { useState, useEffect } from 'react';

// Style
import './home.css'

// Component
import Socials from '../../components/socials/Socials.jsx'
import Button from '../../components/button/Button.jsx'
import Contact from '../../components/contact/Contact.jsx'

function Home() {
    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <main>
            <section>   
                <div className={`containerMain ${visibleClass}`}>
                    <article className="containerButton">
                        <a href="#contact">
                            <Button title="Me contacter" className="containerButton__button" />
                        </a>
                    </article>
                    <article className='containerHome'>
                        <div className='containertHome__titleText'>
                            <h2 className='containerHome__titleText--title'>À propos de moi</h2>
                            <p className='containerHome__titleText--text'>
                                Après avoir exploré différents horizons professionnels,
                                j'ai décidé de me reconvertir dans le développement web,
                                un domaine qui m'anime depuis longtemps.
                            </p>
                            <p className='containerHome__titleText--text'>
                                Diplômé d'OpenClassrooms en tant que "Développeur informatique" 
                                (intégrateur web), diplôme de niveau 5 au RNCP (Bac+2),
                                j'ai acquis une solide base de compétences techniques en HTML,
                                CSS, JavaScript, React, Redux, Node.js et autres.<br/>
                                Mais au-delà de mes compétences techniques,
                                je suis convaincu que c'est ma curiosité,
                                mon esprit d'équipe 
                                et ma capacité à résoudre les problèmes
                                qui font de moi un véritable atout
                                pour toute entreprise en quête d'innovation et de qualité.
                            </p>
                            <p className='containerHome__titleText--text'>
                                Je suis impatient de mettre mes compétences
                                et ma passion au service de projets stimulants
                                et de continuer à apprendre
                                et à grandir dans ce domaine en constante évolution.
                            </p>
                        </div>
                        <div className='containerHome__socials'>
                            <Socials className="containertHome__socials--anime" />
                        </div>
                    </article>
                    <article className="containerContact">
                        <h2 id="contact" className="containerContact__title">Me contacter</h2>
                        <Contact />
                    </article>
                </div>  
            </section>
        </main>
    );
}

export default Home;