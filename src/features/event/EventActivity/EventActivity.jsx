import React from 'react'
import { Header, Segment, Feed, Sticky } from 'semantic-ui-react'
import EventActivityItem from './EventActivityItem'


const EventActivity = ({activities}) => {
  return (
    <Segment basic>
      <Header attached='top' content='Recent Activity'/>
      <Segment attached>
        <Feed>
          {activities && activities.map((activity) => (
            <EventActivityItem key={activity.id} activity={activity}/>
          ))}
        </Feed>
      </Segment>
    </Segment>
  )
}

export default EventActivity
