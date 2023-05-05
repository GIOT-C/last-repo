import './DestinationBody.css';
import Destinations from './Destinations';
import image1 from './images/destinations-img-1.png';
import image2 from './images/destinations-img-2.png';
import image3 from './images/destinations-img-3.png';
import image4 from './images/destinations-img-4.png';
import image5 from './images/destinations-img-5.png';
import image6 from './images/destinations-img-6.png';
function DestinationBody() {

    const destinationData = [
        {
            destinationImage: image1,
            place: 'Big Sur',
            location: 'California, USA'
        },
        {
            destinationImage: image2,
            place: 'Prescott',
            location: 'Arizona, USA'
        },
        {
            destinationImage: image3,
            place: 'Fort Mayers',
            location: 'Florida, USA'
        },
        {
            destinationImage: image4,
            place: 'Tuscan',
            location: 'Arizona, USA'
        },
        {
            destinationImage: image5,
            place: 'St Joseph',
            location: 'Michigan, USA'
        },
        {
            destinationImage: image6,
            place: 'Madrid',
            location: 'Spain'
        }
    ]
    return (
        <>
            <h1 className='destination-header'>Popular Destinations</h1>
            <div className="destination-body-container">

                <Destinations data={destinationData[0]} />
                <Destinations data={destinationData[1]} />
                <Destinations data={destinationData[2]} />
                <Destinations data={destinationData[3]} />
                <Destinations data={destinationData[4]} />
                <Destinations data={destinationData[5]} />

            </div>


        </>



    )
}

export default DestinationBody;