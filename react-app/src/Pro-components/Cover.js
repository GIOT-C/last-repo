import './Cover.css';
import memberImg from './images/member.png';
function Cover() {
    return (
        <div className="Cover-container">
            <div className="navigation">
                <h1 className='logo'>2rism<i className="fa-solid fa-paper-plane"></i></h1>
                <ul>
                    <li>Home</li>
                    <li>Hotels</li>
                    <li>Restaurants</li>
                    <li>Tours</li>
                    <li>Destinations</li>
                    <li>Activities</li>
                    <li>Contact</li>
                </ul>
                <div className='account'>
                    <div className="account-user">
                        <p className='holla'>Holla,  </p>
                        <p className='member'>Ales Nesetril</p>
                    </div>
                    <div>
                        <img className='member-img' src={memberImg} alt="member" />
                    </div>
                </div>
            </div>
            <h1 className='header-text'>discover the most engaging places</h1>
            <div className="discover-container">
                <div className='discover'>
                    <i className="fa-sharp fa-solid fa-globe"></i>
                    <p>Discover On 3D Globe</p>
                </div>
            </div>


            <div className="info-parent-container">
                <div className="info-container">
                    <div className='info-child-container'>
                        <span className='info-i'><i className="fa-solid fa-location-dot"></i></span>
                        <div className="info-child-container-p">
                            <p className='main-p'> location </p>
                            <p className='dark-text'>Explore nearby destinations</p>
                        </div>
                    </div>

                    <div className='info-child-container'>
                        <span className='info-i'> <i className="fa-sharp fa-solid fa-person-biking"></i></span>
                        <div className="info-child-container-p">
                            <p className='main-p'>Activity </p>
                            <p className='dark-text'>All activities</p>
                        </div>

                    </div>

                    <div className='info-child-container'>
                        <span className='info-i'><i className="fa-solid fa-calendar-day"></i></span>
                        <div className="info-child-container-p">
                            <p className='main-p'>When </p>
                            <p className='dark-text'>Choose a date</p>
                        </div>

                    </div>

                    <div className='info-child-container'>
                        <span className='info-i'><i className="fa-solid fa-users"></i></span>
                        <div className="info-child-container-p">
                            <p className='main-p'>Guests </p>
                            <p className='dark-text'>1 guest</p>
                        </div>

                    </div>

                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Cover;