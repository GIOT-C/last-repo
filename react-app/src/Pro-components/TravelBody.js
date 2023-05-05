import './TravelBody.css';
import Travel from './Travel';
import image1 from './images/travel-img-1.png';
import image2 from './images/travel-img-2.png';
import { useState } from 'react';
function TravelBody() {

    const travelData = [
        {
            travelImage: image1,
            travelDescription: 'East Village Ice Cream Crawl',
            travelInfo: "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…",
            travelDate: 'Today',
            travelAuthor: 'Maria Phillips',
            travelComments: '2'
        },
        {
            travelImage: image2,
            travelDescription: 'Brooklyn Bridge cinematic photo walk',
            travelInfo: "This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I am always open to capture clients at different locations upon request for an additional charge. ",
            travelDate: 'Today',
            travelAuthor: 'James ',
            travelComments: '17'
        }
    ]

    const [activeTravel, setActiveTravel] = useState(false);

    function clickHendler() {
        if (activeTravel === true) {
            setActiveTravel(false);
        } else {
            setActiveTravel(true)
        }
    }

    return (

        <>
            <div className="travel-header-container">
                <div className="travel-header-child-container">
                    <h1>Travel Tips and Advice</h1>

                    {activeTravel === true
                        ?
                        <button className='travel-header-button read-more'
                            onClick={() => clickHendler(true)}>
                            show less
                        </button>
                        :
                        <button className='travel-header-button read-more'
                            onClick={() => clickHendler(true)}>
                            View all
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    }

                </div>
            </div>

            <div className="travel-body-container">
                <Travel data={travelData[0]} />
                <Travel data={travelData[1]} />
            </div>

            {activeTravel === true
                ?
                <div className=" travel-body-container travel-body-container-two">
                    <Travel data={travelData[1]} />
                    <Travel data={travelData[0]} />
                </div>
                :
                false
            }
        </>
    )
}

export default TravelBody;