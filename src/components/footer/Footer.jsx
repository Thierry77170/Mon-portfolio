// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';

// Style
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="containerFooter">
                <p className="containerFooter__text">
                    Développé avec JavaScript/React et hébergé sur 
                    <a href="https://github.com/Thierry77170?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Lien vers mon Github"
                        >
                        <FontAwesomeIcon icon={faGithub} size="2x" className='iconGitHub' />
                    </a>
                </p> 
                <div className='containerFooter__icon'>
                    <FontAwesomeIcon icon={faHtml5} size="3x" color="#e34c26" />,
                    <FontAwesomeIcon icon={faCss3} size="3x" color="#1572b6" />,
                    <FontAwesomeIcon icon={faJs} size="3x" style={{ backgroundColor: '#ffffff', borderRadius: '50%', padding: '0px'}} color="#ffd60a" />,
                    <FontAwesomeIcon icon={faReact} size="2x" style={{ backgroundColor: 'rgb(8, 8, 143)', borderRadius: '50%', padding: '6px'}} color="#ffffff" />, 
                    <FontAwesomeIcon icon={faSass} size="3x" color="#cc6699" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;