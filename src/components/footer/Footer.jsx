// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Style
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="containerFooter">
                <p>Développé avec JavaScript/React et hébergé sur 
                    <a href="https://github.com/Thierry77170?tab=repositories" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className='iconGitHub' />
                    </a>
                </p> 
            </div>
        </footer>
    );
}

export default Footer;