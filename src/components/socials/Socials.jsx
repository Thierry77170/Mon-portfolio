// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

// Style
import './socials.css'

function Socials() {
    return (

        <div className="card">
            <div className="background">
        </div>

        <div className="socialsText">Socials</div>
            <a href="https://github.com/Thierry77170?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Lien vers mon Github"
                >
                <div className="box box1">
                    <span className="icon">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </span>
                </div>
            </a>
        
            <a href="https://www.linkedin.com/in/thierry-de-sousa-9266a4295/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Lien vers mon Linkedin"
                >
                <div className="box box2">
                    <span className="icon">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </span>
                </div>
            </a>
        
            <a href="https://discord.gg/thierry_08445" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Lien vers mon Discord"
                >
                <div className="box box3">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
                </div>
            </a>
            <div className="box box4"></div>
        </div>
    );
}

export default Socials;