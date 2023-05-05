import './Activities.css';

function Activities(props) {
    return (
        <div className="activities-container">
            <div className="activities-child-container">
                <img className='activities-img' src={props.data.activitiesImage} alt="" />
                <h4 className='activities-category-text'>{props.data.activitiesCategory}</h4>
            </div>
        </div>
    )
}

export default Activities;