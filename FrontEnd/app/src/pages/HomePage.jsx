import Header from '../components/UI/Header/Header.jsx';
import Body from '../components/UI/Body/Body.jsx';
import Footer from '../components/UI/Footer/Footer.jsx';
import './PageStyle.css'

const HomePage = () => {
    return (
        <div className='bodyhome' >
            <Header/>
            <Body/>
            <Footer /> 
        </div>
    );
};

export default HomePage;
