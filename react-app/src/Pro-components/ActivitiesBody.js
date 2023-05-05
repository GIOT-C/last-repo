import Activities from './Activities';
import './ActivitiesBody.css';
import img1 from './images/activities-img-1.png';
import img2 from './images/activities-img-2.png';
import img3 from './images/activities-img-3.png';
import img4 from './images/activities-img-4.png';
import aboutImg from './images/about.png'
import { useState } from 'react';
function ActivitiesBody() {
    const activitiesData = [
        {
            activitiesImage: img1,
            activitiesCategory: "Sailing"
        },
        {
            activitiesImage: img2,
            activitiesCategory: "Climbing"
        },
        {
            activitiesImage: img3,
            activitiesCategory: "Skiing"
        },
        {
            activitiesImage: img4,
            activitiesCategory: "Hiking"
        }
    ]

    const [activeActivities, setActiveActivities] = useState(false);

    function clickHendler() {
        if (activeActivities === true) {
            setActiveActivities(false);
        } else {
            setActiveActivities(true)
        }
    }

    return (
        <>
            <div className="activities-header-container">
                <div className="activities-header-child-container">
                    <h1>Activities</h1>

                    {activeActivities === true
                        ?
                        <button className='activities-header-button read-more'
                            onClick={() => clickHendler(true)}>
                            show less
                        </button>
                        :
                        <button className='activities-header-button read-more'
                            onClick={() => clickHendler(true)}>
                            View all
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    }
                </div>
            </div>
            <div className="activities-body-container">
                <Activities data={activitiesData[0]} />
                <Activities data={activitiesData[1]} />
                <Activities data={activitiesData[2]} />
                <Activities data={activitiesData[3]} />
            </div>

            {activeActivities === true
                ?
                <div className="activities-body-container">
                    <Activities data={activitiesData[3]} />
                    <Activities data={activitiesData[2]} />
                    <Activities data={activitiesData[1]} />
                    <Activities data={activitiesData[0]} />
                </div>
                :
                false
            }

            <div className="about-container">
                <div className="about-child-container">
                    <div className="about-header">
                        <h2>About Us</h2>
                        <p className='about-header-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue.
                            Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per inceptos himenaeos.</p>

                        {activeActivities === true
                            ?
                            <p className='about-header-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio.
                                Aliquam porta consectetur lorem sit amet ultrices.
                            </p>
                            :
                            false
                        }
                        {activeActivities === true
                            ?
                            <button className='about-header-button read-more'
                                onClick={() => clickHendler(true)}>
                                show less
                            </button>
                            :
                            <button className='about-header-button read-more'
                                onClick={() => clickHendler(true)}>
                                Read more
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        }

                    </div>
                    <div className="about-image-container">
                        <img className='about-img' src={aboutImg} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ActivitiesBody;