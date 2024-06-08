// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Style
import './card.css'

function Card(props) {

    return (
        <div className='work'>      
            <div className='work__containerImg'>
                <img src={props.src} alt={props.alt} className='work__containerImg--img'/>
                <p className='work__containerImg--text'>
                    {props.numberImg}/{props.ImgTotal}
                </p>
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
            <p className='work__text'>{props.text}</p>
            <div className='work__icon'>
                {props.icon1}
                {props.icon2}     
                {props.icon3}
                {props.icon4}
            </div>
        </div>
    );
}

export default Card;