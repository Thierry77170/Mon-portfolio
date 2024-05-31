// React-router-dom
import { Outlet } from 'react-router-dom';

// Components
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'

function Root() {
    return (
        <>
            <Header />  
            <Outlet />
            <Footer />
        </>
      );
}

export default Root;