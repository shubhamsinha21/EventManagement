import './EventCard.css'

const EventCard = ({id, date, location, description, img, heading}) => {

    const {year, month} = date;
    return (
        <>
            <div>
                <h3>{heading}</h3>
                <p>
                    <span>{year}</span> { }
                    <span>{month}</span>
                </p>
                <p>{location}</p>
            </div>
            <div>
                <img src={img} />
            </div>
        </>
    )
}

export default EventCard