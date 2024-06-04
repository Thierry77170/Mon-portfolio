// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Style
import './card.css'

function Card(props) {

    return (
        <article className="containerCard">
            <div className="containerCard__work">
                <img src={props.src} alt={props.alt} className='containerCard__work--img' />
            </div>
            <div className="containerCard__title"> 
                <a href={props.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Lien vers mon Github"
                    className='containerCard__title--lien'
                >
                    <FontAwesomeIcon 
                            icon={faGithub} 
                            size="2x" 
                        />
                </a>
                <h2>{props.title}</h2> 
            </div>
            <div className="containerCard__texte">
                <div className="likes">
                    <svg viewBox="-2 0 105 92" className="likes_svg"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path></svg><span className="likes_text">22</span>
                </div>
            </div>
        </article>
    );
}

export default Card;