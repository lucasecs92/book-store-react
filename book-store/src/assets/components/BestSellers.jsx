import styles from '../css/BestSellers.module.css';

import { motion } from "framer-motion";

import image1 from '../images/book1.jpg';
import image2 from '../images/book2.jpg';
import image3 from '../images/book3.jpg';
import image4 from '../images/book4.jpg';
import image5 from '../images/book5.jpg';
import image6 from '../images/book6.jpg';
import image7 from '../images/book7.jpg';
import image8 from '../images/book8.jpg';
import image9 from '../images/book9.jpg';
import image10 from '../images/book10.jpg';

const BestSellers = () => {

    const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, ];

    return (
        <>
          <section className={styles.bestSellersWrap}>
                <h3>Mais Vendidos</h3>
                <motion.div className={styles.carousel}>
                    <motion.div className={styles.inner}>

                        {images.map(image => (
                            <motion.div className={styles.item} key={image}>
                                <img src={image} alt="Texto alt" />
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
          </section>
        </>
    )
}

export default BestSellers;