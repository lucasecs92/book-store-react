import styles from '../css/HomePage.module.css';
import PropTypes from 'prop-types';

import Slider from './Slider.jsx';
import Release from './Release.jsx';
import Newsletter from './Newsletter.jsx';
import BestSellers from './BestSellers.jsx';
import DownloadApp from './DownloadApp.jsx';

const HomePage = (props) => {

    return (
        <>
            <section className={styles.containerHome}>

                <Slider/>
                
                <Release addToCart={props.addToCart}/>

                <Newsletter />
                
                <BestSellers addToCart={props.addToCart}/>

                <DownloadApp/>

            </section>
        </>
    )
}

HomePage.propTypes = {
    addToCart: PropTypes.func.isRequired,
};

export default HomePage;