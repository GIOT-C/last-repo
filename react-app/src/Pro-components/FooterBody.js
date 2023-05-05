import Footer from './Footer';
import styles from './FooterBody.module.css';

function FooterBody() {
    return (
        <div className={`${styles['footerBody-container']}`}>
            <Footer></Footer>
        </div>
    )
}

export default FooterBody;

