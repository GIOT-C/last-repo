import './Hotels.css';

function Hotels(props) {
    return (
        <>
            <div className="hotels-container">
                <img className='hotels-img' src={props.data.hotelsImage} alt="hotels and restaurants" />
                <h4 className='hotels-place-text'> {props.data.place}</h4>
                <div className="hotels-location-container">
                    <p className='hotels-location-text'> <span className='hotels-location-i' ><i className="fa-sharp fa-solid fa-location-dot"></i></span>{props.data.location}</p>
                    <div className='starIcon-container'>
                        <i className={props.data.fullStar}></i>
                        <i className={props.data.fullStar}></i>
                        <i className={props.data.fullStar}></i>
                        <i className={props.data.star2}></i>
                        <i className={props.data.star}></i>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Hotels;