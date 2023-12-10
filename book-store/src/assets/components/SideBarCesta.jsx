import styles from '../css/SideBarCesta.module.css'

const SideBarCesta = () => {

    return (
        <>
            <section className={styles.basketContainer}>
                <section className={styles.basketContainerSecond}>
                    <div className={styles.closeBtn}>
                    </div>
                    <section className={styles.basketContainerThird}>
                        <header className={styles.basketHeader}>
                            <div className={styles.titleHeader}>
                                <h3>Minha Cesta</h3>
                            </div>
                        </header>
                        <section className={styles.basketArea}>
                            <div className={styles.emptyBasket}>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default SideBarCesta; 