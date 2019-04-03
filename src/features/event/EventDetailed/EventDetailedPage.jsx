import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux';
import { withFirestore, firebaseConnect, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { objectToArray, createDataTree } from '../../../app/common/util/helpers';
import { goingToEvent, cancelGoingToEvent } from '../../user/userActions';
import { addEventComment } from '../eventActions';
import { openModal } from '../../modals/modalActions'
import Footer from '../../home/Footer' ; 
import {    
  osVersion, osName
} from "react-device-detect";


const mapState = (state, ownProps) => {
  let event = {};

  if (state.firestore.ordered.events && state.firestore.ordered.events[0]) {
    event = state.firestore.ordered.events[0];
  }

  return {
    requesting: state.firestore.status.requesting,
    event,
    loading: state.async.loading,
    auth: state.firebase.auth,
    eventChat:
      !isEmpty(state.firebase.data.event_chat) &&
      objectToArray(state.firebase.data.event_chat[ownProps.match.params.id])
  };
};

const actions = {
  goingToEvent,
  cancelGoingToEvent,
  addEventComment,
  openModal
};

class EventDetailedPage extends Component {
  state = {
    initialLoading: true
  }

  async componentDidMount() {
    
    const { firestore, match } = this.props;

    

    let event = await firestore.get(`events/${match.params.id}`);
    if (!event.exists) {
      toastr.error('Not found', 'This is not the event you are looking for')
      this.props.history.push('/error')
    }
    await firestore.setListener(`events/${match.params.id}`);
    this.setState({
      initialLoading: false
    })
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`events/${match.params.id}`);
  }

  render() {
    const { match, requesting, openModal, loading, event, auth, goingToEvent, cancelGoingToEvent, addEventComment, eventChat } = this.props;
    const attendees = event && event.attendees && objectToArray(event.attendees).sort(function(a,b) {
      return a.joinDate - b.joinDate
    })
    const isHost = event.hostUid === auth.uid;
    const isGoing = attendees && attendees.some(a => a.id === auth.uid);
    const chatTree = !isEmpty(eventChat) && createDataTree(eventChat);
    const authenticated = auth.isLoaded && !auth.isEmpty;
    const loadingEvent = requesting[`events/${match.params.id}`]

    if (loadingEvent || this.state.initialLoading) return <LoadingComponent inverted={true}/>

    const OS = parseInt(osVersion, 10);     
    let showItem = true; 
    if ( osName === "iOS" && OS < 6 ) {
     showItem = false;
    }

    // Test for OS version, if NOT supported skip item ShowItem = false
    // if OS < 10 skip chat and sidebar 

    return (
      <React.Fragment>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={12}>
            <EventDetailedHeader
              event={event}
              loading={loading}
              isHost={isHost}
              isGoing={isGoing}
              goingToEvent={goingToEvent}
              cancelGoingToEvent={cancelGoingToEvent}
              authenticated={authenticated}
              openModal={openModal}
            />
            <EventDetailedInfo event={event} />
            { showItem && authenticated &&
              <EventDetailedChat eventChat={chatTree} addEventComment={addEventComment} eventId={event.id} />}
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={12}>
          { showItem &&
            <EventDetailedSidebar attendees={attendees} />
          }
          </Grid.Column> 
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect(props => props.auth.isLoaded && !props.auth.isEmpty && [`event_chat/${props.match.params.id}`])
)(EventDetailedPage);
