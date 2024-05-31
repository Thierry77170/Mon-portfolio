// React 
import { useState, useEffect } from 'react';

// Style
import './home.css'

function Home() {

    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <main>
            <section>
                <article className={`containerHome ${visibleClass}`}>
                    <div className='containertHome__containerTitle'>
                        <h2 id='presentation'>À propos de moi</h2>
                    </div>  
                    <p className='containertHome__text'>
                        Je suis Thierry DE SOUSA,<br/>
                        développeur web Front-End passionné et engagé.<br/>
                        Après avoir exploré différents horizons professionnels,<br/>
                        j'ai décidé de me reconvertir dans le développement web, <br/>
                        un domaine qui m'anime depuis longtemps.
                    </p>
                    <p className='containertHome__text'>
                        Diplômé d'Openclassrooms en tant que "Développeur intégrateur web",<br/>
                        diplôme de niveau 5 au RNCP (Bac+2),<br/>
                        j'ai acquis une solide base de compétences techniques en HTML,<br/>
                        CSS, JavaScript, React, Redux, Node.js et autres.<br/>
                        Mais au-delà de mes compétences techniques, <br/>
                        je suis convaincu que c'est ma curiosité,<br/>
                        mon esprit d'équipe<br/> 
                        et ma capacité à résoudre les problèmes<br/>
                        qui font de moi un véritable atout<br/>
                        pour toute entreprise en quête d'innovation et de qualité.
                    </p>
                    <p className='containertHome__text'>
                        Je suis impatient de mettre mes compétences<br/>
                        et ma passion au service de projets stimulants<br/> 
                        et de continuer à apprendre<br/>
                        et à grandir dans ce domaine en constante évolution.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default Home;