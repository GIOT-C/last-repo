
import './Destinations.css';


function Destinations(props) {
    return (
        <>
            <div className="destination">
                <img className='destination-img' src={props.data.destinationImage} alt="destinations" />
                <h4>{props.data.place}</h4>
                <p className='destination-location-text'>{props.data.location}</p>
            </div>
        </>

    )
}

export default Destinations;

