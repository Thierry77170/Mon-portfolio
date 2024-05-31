// React 
import { useState, useEffect } from 'react';

// Style
import './button.css'

function Button(props) {

    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <button className={`btn ${visibleClass}`}>{props.title}</button>
    );
}

export default Button;