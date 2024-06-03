// React 
import { useState, useEffect } from 'react';

// Variable
import cvThierry from '../../img/cvThierry.webp'

// Style
import './monCv.css'

function MonCv() {
    const [visibleClass, setVisibleClass] = useState('fade');
    useEffect(() => {
        setVisibleClass('fade visible');
    }, []);

    return (
        <main>
            <section>
                <div className={`containerCv ${visibleClass}`}>
                <img src={cvThierry} alt="cvThierry" className='containerCv__img' />
                </div>

            </section>
        </main>
    );
}

export default MonCv;