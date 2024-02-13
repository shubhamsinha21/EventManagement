import {EventCard} from '../../components'
import {eventList} from '../../utils/EventDatabase'
import './EventList.css'

const EventList = () => {

    const renderEventList = () => {
        return (
            eventList.map(({id, heading, date, location, description, img}) => {
                return (
                    <EventCard
                        key={id}
                        id={id}
                        date={date}
                        heading={heading}
                        description={description}
                        location={location}
                        img={img}
                    />
                )
            })
        )
    }

    return (
        <div>
            {eventList.length > 0 ? (
                renderEventList()
            ) : <p>No events available</p>}
        </div>
    )
}

export default EventList