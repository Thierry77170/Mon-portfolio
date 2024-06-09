// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// Style
import './contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contact__inner">
                <div className="contact__inner--front">
                    <h3>Prêt à donner vie à vos idées ?</h3>
                    <p>Développeur Front-End spécialisé en JS/React, je suis là pour transformer vos projets en réalités numériques. Contactez-moi et ensemble, nous créerons des expériences utilisateur exceptionnelles.</p>
                </div>
                <div className="contact__inner--back">
                    <h3>Thierry DE SOUSA</h3>
                    <h4>Web Developper Front-End JS/React</h4>
                    <p>
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp; (+33) 6 24 26 50 20<br/>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp; thierry.desousa77@gmail.com<br/>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        &nbsp; Seine-et-Marne (77), Île-de-France (France)
                    </p>
                </div>
            </div>
        </div>         
    );
}

export default Contact;