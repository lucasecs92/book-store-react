import '../styles/DownloadApp.css';

import telefone from '../img/mobile-bookstore.png';
import googlePlayImg from '../img/google-play.svg';
import appStoreImg from '../img/app-store.svg';

const DownloadApp = () => {

    return (
        <>   
            <section className="download-app" id='downloadApp'>
                <section className="download-app-wrap">

                    <div className="download-app-telefone">
                        <img src={telefone} alt="Telefone" />
                    </div>

                    <div className="download-app-info">
                        <h2>Download Our App Now!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore explicabo, architecto eveniet hic ipsum, ex provident omnis iste exercitationem repudiandae. At consequuntur reiciendis illo exercitationem cupiditate culpa et blanditiis.</p>
                        <div className="apps"> 
                            <img src={googlePlayImg} alt="Google Play" className="google-play"/>
                            <img src={appStoreImg} alt="App Store" className="app-store"/>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}

export default DownloadApp; 