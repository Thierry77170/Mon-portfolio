// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Components
import IconReact from '../iconReact/IconReact.jsx'

// Style
import './card.css'

function Card(props) {

    return (
        <div className='work'>      
            <div className='work__containerImg'>
                <img src={props.src} alt={props.alt} className='work__containerImg--img'/>
            </div>   
            <div className='work__containerLienTitle'>
                <a href={props.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Lien vers mon projet Github"
                    className='work__containerLienTitle--lien'
                >
                    <FontAwesomeIcon 
                        icon={faGithub} 
                        size="2x" 
                        className='iconGitHubWork'
                    />
                </a>
                <h2>{props.title}</h2>
            </div>
            <div className='work__containerIconText'>
                <IconReact />
                <p className='work__containerIconText--text'>{props.text}</p>
            </div>
        </div>
    );
}

export default Card;