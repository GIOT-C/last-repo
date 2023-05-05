import './Travel.css';

function Travel(props) {
    return (
        <>
            <div className="travel-container">
                <div className="travel-img-container">
                    <img className='travel-img' src={props.data.travelImage} alt="travel" />
                </div>
                <div className="travel-information-container">
                    <div className="travel-description-container">
                        <h3>{props.data.travelDescription}</h3>
                        <p className='travel-info'>{props.data.travelInfo}</p>
                    </div>
                    <div className="travel-information-data">
                        <p><i className="fa-solid fa-calendar-day"></i><span className='date-added'>{props.data.travelDate}</span></p>
                        <p><i className="fa-solid fa-user"></i><span className='author'>{props.data.travelAuthor}</span></p>
                        <p><i className="fa-sharp fa-regular fa-comment"></i><span className='comment'>{props.data.travelComments}</span></p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Travel;