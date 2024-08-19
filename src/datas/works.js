// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';

// Components
import IconRedux from '../components/iconRedux/IconRedux.jsx'
import IconVSC from '../components/iconVSC/IconVSC.jsx'
import IconSwagger from '../components/iconSwagger/IconSwagger.jsx'

// Variables pour le tableau "image"
import ImageArgentBank from '../img/ArgentBank.webp'
import Image724Events from '../img/724Events.webp'; 
import ImageBooki from '../img/booki.webp'; 
import ImageKasa from '../img/kasa.webp'; 
import ImageNinaCarducci from '../img/ninaCarducci.webp'; 
import ImageOhmyfood from '../img/ohmyfood.webp'; 
import ImageSophieBluel from '../img/sophieBluel.webp'; 
import ImageLibrairieDeFilms from '../img/librairieDeFilms.webp'; 

const works = [
    {
        "image": ImageArgentBank,
        "alt": "image du projet 'Argent Bank'",
        "lien": "https://github.com/Thierry77170/argentBank.git",
        "title":   "Argent Bank",
        "text": "Dans ce projet, j'ai développé le front-end d'une application bancaire en utilisant React et Redux pour une expérience utilisateur dynamique et réactive. J'ai intégré le front-end avec le back-end via des appels API REST et utilisé Swagger pour définir les points d'accès de l'API. J'ai également utilisé Node.js pour gérer le code côté serveur, renforçant ainsi mes compétences en matière d'applications full-stack.",
        "icon1": <FontAwesomeIcon className='iconCompetence' icon={faJs} size="3x" style={{ width: '66px', height: '66px', backgroundColor: '#ffffff', borderRadius: '50%', padding: '0px'}} color="#ffd60a" />,
        "icon2": <FontAwesomeIcon className='iconCompetence' icon={faReact} size="2x" style={{ width: '54px', height: '54px', backgroundColor: 'rgb(8, 8, 143)', borderRadius: '50%', padding: '6px'}} color="#ffffff" />, 
        "icon3": <IconRedux />,
        "icon4": <IconSwagger />
    },
    {
        "image": Image724Events,
        "alt": "image du projet '724Events'",
        "lien": "https://github.com/Thierry77170/724Events.git",
        "title":  "724 Events",
        "text": "Dans ce projet, j'ai été chargé de débugger et de finaliser le développement d'un site one-page. Pour ce faire, j'ai utilisé les Chrome DevTools et mes compétences en JavaScript et React pour identifier et résoudre les problèmes. J'ai également complété le cahier de recette, qui détaille les scénarios de test nécessaires pour vérifier le bon fonctionnement du site. Enfin, j'ai utilisé Yarn et Node.js pour la gestion du projet, et j'ai versionné mon travail avec GitHub en utilisant Visual Studio Code comme éditeur de code.",
        "icon1": <FontAwesomeIcon className='iconCompetence' icon={faJs} size="3x" style={{ width: '66px', height: '66px', backgroundColor: '#ffffff', borderRadius: '50%', padding: '0px'}} color="#ffd60a" />,
        "icon2": <FontAwesomeIcon className='iconCompetence' icon={faReact} size="2x" style={{ width: '54px', height: '54px', backgroundColor: 'rgb(8, 8, 143)', borderRadius: '50%', padding: '6px'}} color="#ffffff" />, 
        "icon3":  <FontAwesomeIcon icon={faChrome} size="3x" style={{ color: '#4285F4', width: '66px', height: '66px' }} />,
    },
    {
        "image": ImageBooki,
        "alt": "image du projet 'Booki'",
        "lien": "https://github.com/Thierry77170/Booki.git",
        "title":  "Booki",
        "text": "Dans ce projet, j'ai été chargé de créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS. Ma mission principale était d'intégrer l'interface responsive du site, en m'appuyant sur les maquettes Figma fournies pour mobile, tablette et desktop. J'ai également utilisé les images et une note de synthèse sur les spécificités du projet pour créer mes propres composants d'interface et obtenir un rendu conforme à la maquette.",
        "icon1":  <FontAwesomeIcon className='iconCompetence' icon={faHtml5} size="3x" style={{ width: '51px', height: '66px' }} color="#e34c26" />,
        "icon2": <FontAwesomeIcon icon={faCss3} size="3x" style={{ width: '66px', height: '66px' }} color="#1572b6" />,
    },
    {
        "image": ImageKasa,
        "alt": "image du projet 'Kasa'",
        "lien": "https://github.com/Thierry77170/Kasa.git",
        "title":  "Kasa",
        "text": "J'ai créé le front-end d'une application en utilisant React et React Router pour une interface utilisateur moderne et réactive. J'ai travaillé sur la logique de présentation des données et les composants React, et j'ai utilisé React Router pour la navigation entre les pages. Le projet s'est concentré sur le développement front-end à partir de maquettes et de données simulées. J'ai commencé avec Vite, un outil de construction rapide pour les applications modernes, et j'ai utilisé Node.js pour exécuter du code JavaScript en dehors du navigateur.",
        "icon1": <FontAwesomeIcon className='iconCompetence' icon={faJs} size="3x" style={{ width: '66px', height: '66px', backgroundColor: '#ffffff', borderRadius: '50%', padding: '0px'}} color="#ffd60a" />,
        "icon2": <FontAwesomeIcon className='iconCompetence' icon={faReact} size="2x" style={{ width: '54px', height: '54px', backgroundColor: 'rgb(8, 8, 143)', borderRadius: '50%', padding: '6px'}} color="#ffffff" />, 
        "icon3": <FontAwesomeIcon icon={faSass} size="3x" style={{ color: '#cc6699', width: '66px', height: '66px' }} /> ,
    },
    {
        "image": ImageNinaCarducci,
        "alt": "image du projet 'Nina CARDUCCI'",
        "lien": "https://github.com/Thierry77170/ninaCarducci.git",
        "title":  "Nina CARDUCCI",
        "text": "J'ai optimisé le référencement d'un site en améliorant sa performance et son accessibilité. J'ai identifié les problèmes, proposé des recommandations et appliqué les améliorations en utilisant des outils tels que Lighthouse et Wave. J'ai créé un rapport illustrant les résultats avant et après les modifications, avec des explications sur les changements apportés et leur impact sur le référencement et l'accessibilité du site.",
        "icon1":  <FontAwesomeIcon icon={faChrome} size="3x" style={{ color: '#4285F4', width: '66px', height: '66px' }} />,
        "icon2": <IconVSC />
    },
    {
        "image": ImageOhmyfood,
        "alt": "image du projet 'Ohmyfood'",
        "lien": "https://github.com/Thierry77170/Ohmyfood.git",
        "title":  "Ohmyfood",
        "text": "Dans ce projet, j'ai créé l'interface mobile-first du site Ohmyfood en utilisant Sass et des animations CSS pour améliorer l'expérience utilisateur. J'ai intégré la maquette en mobile-first et veillé à ce que le site soit adaptatif et réactif. J'ai utilisé Git et GitHub pour versionner mon projet.",
        "icon1": <FontAwesomeIcon className='iconCompetence' icon={faHtml5} size="3x" style={{ width: '51px', height: '66px' }} color="#e34c26" />,
        "icon2": <FontAwesomeIcon icon={faCss3} size="3x" style={{ width: '66px', height: '66px' }} color="#1572b6" />,
        "icon3": <FontAwesomeIcon icon={faSass} size="3x" style={{ color: '#cc6699', width: '66px', height: '66px' }} /> ,
    },
    {
        "image": ImageSophieBluel,
        "alt": "image du projet 'Sophie BLUEL'",
        "lien": "https://github.com/Thierry77170/Portfolio-architecte-sophie-bluel.git",
        "title":  "Sophie BLUEL",
        "text": "J'ai créé une page web dynamique pour un site d'architecture d'intérieur en utilisant JavaScript et une API. J'ai travaillé sur le Front-End, développé la page de présentation, géré les événements utilisateurs et créé une page de connexion et une modale d'upload. J'ai tout développé à partir de zéro, approfondissant mes compétences en JavaScript. J'ai également appris à communiquer avec une API. J'ai utilisé Figma, Visual Studio Code et GitHub pour ce projet.",
        "icon1": <FontAwesomeIcon className='iconCompetence' icon={faHtml5} size="3x" style={{ width: '51px', height: '66px' }} color="#e34c26" />,
        "icon2": <FontAwesomeIcon icon={faCss3} size="3x" style={{ width: '66px', height: '66px' }} color="#1572b6" />,
        "icon3": <FontAwesomeIcon className='iconCompetence' icon={faJs} size="3x" style={{ width: '66px', height: '66px', backgroundColor: '#ffffff', borderRadius: '50%', padding: '0px'}} color="#ffd60a" />,
        "icon4": <IconSwagger />
    },
    {
        "image": ImageLibrairieDeFilms,
        "alt": "image du projet 'Librairie de film'",
        "lien": "https://github.com/Thierry77170/librairieDeFilm.git",
        "title":  "Librairie de films",
        "text": "J'ai listé les films dans des cartes avec : le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes sont côtes à côtes et responsive. Lorsque la fenêtre est réduite, les cartes sautent à la ligne suivante. J'ai ajouté un bouton dans les cartes permettant de supprimer celle-ci. J'ai ajouté un bouton pour basculer j'aime/je n'aime pas. J'ai ajouté un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il fallait donc les récupérer dynamiquement depuis les films). Quand tous les films d'une catégorie sont supprimés, celle-ci n'apparaît plus. J'ai ajouter un système de pagination avec les fonctionnalités suivantes : Boutons précédent/suivant Choix du nombre d'éléments affichés par page (4, 8 ou 12).",
        "icon1": <FontAwesomeIcon className='iconCompetence' icon={faJs} size="3x" style={{ width: '66px', height: '66px', backgroundColor: '#ffffff', borderRadius: '50%', padding: '0px'}} color="#ffd60a" />,
        "icon2": <FontAwesomeIcon className='iconCompetence' icon={faReact} size="2x" style={{ width: '54px', height: '54px', backgroundColor: 'rgb(8, 8, 143)', borderRadius: '50%', padding: '6px'}} color="#ffffff" />, 
        "icon3": <IconRedux />,
    }
]

export default works;