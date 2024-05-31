// React
import { useState, useEffect } from 'react';

// React-router-dom
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Variables
import macImg from '../../img/mac.webp'

// Style
import './header.css'

// Components
import Button from '../button/Button.jsx'

function Header() {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');
    
    useEffect(() => {
        // On récupère le path avec le hook "useLocation" et on défini la variable "currentPath"
        setCurrentPath(location.pathname);
    }, [location]);

   
    return (
        <header className='containerHeader'>
            <img src={macImg} alt="bureau informatique" className='containerHeader__img' />
            <h1 className='containerHeader__title'>
                Thierry DE SOUSA<br/> 
                <span className='containerHeader__title--job'>Développeur web Front-End</span>
            </h1>
            <nav className="containerHeader__containerBtn">
                {currentPath !== '/' && currentPath !== '/home' && (
                    <NavLink to="/home">
                        <Button title="Accueil" />
                    </NavLink>
                )}
                {currentPath !== '/mesRealisations'  && (
                    <NavLink to="/mesRealisations">
                        <Button title="Mes réalisations" />
                    </NavLink>
                )}
                <Button title="Mes compétences" />
               {currentPath !== '/cv'  && (
                    <NavLink to="/cv">
                        <Button title="Mon C.V." />
                    </NavLink>
                )}  
                <Button title="Me contacter" />
            </nav>        
        </header> 
    );
}

export default Header;