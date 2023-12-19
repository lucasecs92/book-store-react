import styles from '../css/DownloadApp.module.css';

import telefone from '../images/mobile-bookstore.png';
import googlePlayImg from '../images/google-play.png';
import appStoreImg from '../images/app-store.png';

const DownloadApp = () => {

    return (
        <>   
            <section className={styles.downloadApp} id='downloadApp'>
                <section className={styles.downloadAppWrap}>

                    <div className={styles.downloadAppTelefone}>
                        <img src={telefone} alt="Telefone" />
                    </div>

                    <div className={styles.downloadAppInfo}>
                        <h2>Download Our App Now!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore explicabo, architecto eveniet hic ipsum, ex provident omnis iste exercitationem repudiandae. At consequuntur reiciendis illo exercitationem cupiditate culpa et blanditiis.</p>
                        <div className={styles.apps}>
                            <img src={googlePlayImg} alt="Google Play" className={styles.googlePlay}/>
                            <img src={appStoreImg} alt="App Store" className={styles.appStore}/>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}

export default DownloadApp; 