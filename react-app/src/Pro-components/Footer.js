import FooterStyles from './Footer.module.css';
import './Icon.css';

function Footer() {

    const aboutArr = ['About Us', 'Features', 'News', 'Menu'];
    let aboutArrWithId = aboutArr.map((about) => {
        return {
            name: about,
            id: Math.random() * Math.random() * Math.random()
        };
    });

    const companyArr = ['Why 2rism', 'Partner With Us', 'FAQ', 'Blog'];
    let companyArrWithId = companyArr.map((company) => {
        return {
            name: company,
            id: Math.random() * Math.random() * Math.random()
        };
    });

    const supportArr = ['Account', 'Support Center', 'FeedBack', 'Contact Us'];
    let supportArrWidtId = supportArr.map((support) => {
        return {
            name: support,
            id: Math.random() * Math.random() * Math.random()
        }
    })

    return (
        <div className={`${FooterStyles['footer-container']}`}>
            <div className={`${FooterStyles['footer-child-container']}`}>
                <h1 className='logo'>2rism   <i className="fa-solid fa-paper-plane"></i></h1>
                <p>We always make our customers happy by providing as many choises as possible</p>
                <div className={`${FooterStyles['icon-container']}`}>
                    <i className='fa-brands fa-facebook'></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>
            <div className={`${FooterStyles['footer-child-container']}`}>
                <h2>About</h2>
                {aboutArrWithId.map((aboutObj) => {
                    return <p key={aboutObj.id}>{aboutObj.name}</p>
                })}
            </div>
            <div className={`${FooterStyles['footer-child-container']}`}>
                <h2>Company</h2>
                {companyArrWithId.map((companyObj) => {
                    return <p key={companyObj.id}>{companyObj.name}</p>
                })}
            </div>
            <div className={`${FooterStyles['footer-child-container']}`}>
                <h2>Support</h2>
                {supportArrWidtId.map((supportObj) => {
                    return <p key={supportObj.id}>{supportObj.name}</p>
                })}
            </div>
            <div className={`${FooterStyles['footer-child-container']}`}>
                <h2>Subscribe on our destination review newsletters</h2>
                <div className={`${FooterStyles['contact-container']}`}>
                    <div className={`${FooterStyles['contact']}`}>
                        <i className="fa-regular fa-envelope"></i>
                        <div className={`${FooterStyles['gmail-container']}`}>
                            <p>Your Email</p>
                            <h4>Giootarashvili77@gmail.com</h4>
                        </div>
                    </div>

                    <div className={`${FooterStyles['arrow-container']}`}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;