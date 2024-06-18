// React 
import { useState, useEffect } from 'react';

// React-router-dom
import { Link } from 'react-router-dom';

// Style
import './pageError.css'

function PageError() {
    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <main>
            <section>
                <div className={`containerPageError ${visibleClass}`}>
                    <h2 className='containerPageError__title'>404</h2>
                    <p className='containerPageError__text'>{"Oups! La page que vous demandez n'existe pas."}</p>
                    <Link to='/home' className='containerPageError__lien'>
                        {<p>Retourner sur la page d'accueil</p>}
                    </Link>      
                </div>
            </section>
        </main>
    );
}

export default PageError;