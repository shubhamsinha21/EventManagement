import {EventList, EventDetails, FilterEvents} from '../pages'

export const routes = createBrowserRouter([
    {
        path: '/', element: <EventList />
    },
    {
        path: '/findevents', element: <FilterEvents />
    },
    {
        path: '/eventsdetail/:id', element: <EventDetails />
    },
])