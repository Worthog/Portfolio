import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable'
import LoadingComponent from './LoadingComponent'
import { UserIsAuthenticated } from '../../features/auth/authWrapper';
import { Responsive , Container } from 'semantic-ui-react';



const AsyncHomePage = Loadable({
  loader: () => import('../../features/home/HomePage'),
  loading: LoadingComponent
})


const AsyncMainPage = Loadable({
  loader: () => import('../../features/main/main'),
  loading: LoadingComponent
})

const AsyncEventDashboard = Loadable({
  loader: () => import('../../features/event/EventDashboard/EventDashboard'),
  loading: LoadingComponent
})
const AsyncNavBar  = Loadable({
  loader: () => import('../../features/nav/NavBar/NavBar'),
  loading: LoadingComponent
})

const AsyncSideBar  = Loadable({
  loader: () => import ('../../features/nav/Sidebar/SideBar'),  
  loading: LoadingComponent
})

const AsyncEventForm = Loadable({
  loader: () => import('../../features/event/EventForm/EventForm'),
  loading: LoadingComponent
})
const AsyncSettingsDashboard = Loadable({
  loader: () => import('../../features/user/Settings/SettingsDashboard'),
  loading: LoadingComponent
})
const AsyncUserDetailedPage = Loadable({
  loader: () => import('../../features/user/UserDetailed/UserDetailedPage'),
  loading: LoadingComponent
})

const AsyncEventDetailedPage = Loadable({
  loader: () => import('../../features/event/EventDetailed/EventDetailedPage'),
  loading: LoadingComponent
})
const AsyncModalManager = Loadable({
  loader: () => import('../../features/modals/ModalManager'),
  loading: LoadingComponent
})
const AsyncNotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: LoadingComponent
})

const AsyncTest = Loadable({
  loader: () => import('../../features/testarea/TestComponent'),
  loading: LoadingComponent
})

const AsyncNotes = Loadable({
  loader: () => import('../../features/notes/notes'),
  loading: LoadingComponent
})



const AsyncTraining = Loadable({
  loader: () => import('../../features/training/training'),
  loading: LoadingComponent
})

const AsyncAbout = Loadable({
  loader: () => import('../../features/about/AboutPage'),
  loading: LoadingComponent
})

const AsyncContact = Loadable({
  loader: () => import('../../features/contact/ContactPage'),
  loading: LoadingComponent
})
//AsyncEventFallBack
const AsyncEventFallBack = Loadable({
  loader: () => import('../../features/event/EventDetailed/EventFallbackPage'),
  loading: LoadingComponent
})


class App extends Component {
  render() {
    return (
      <div>
        
        <AsyncModalManager/>
       
        <Responsive as={Container} {...Responsive.onlyMobile}> 
                <AsyncSideBar />
        </Responsive>  

        <Responsive as={Container} {...Responsive.onlyTablet}> 
                <AsyncSideBar />
        </Responsive>  

        <Switch>        
          <Route exact path="/" component={AsyncHomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>

              <Responsive as={Container} {...Responsive.onlyComputer}>                           
                <AsyncNavBar />              
              </Responsive>
              <Container className="main">
                <Switch>
                  <Route path="/events" component={AsyncEventDashboard} />
                  <Route path="/event/eventfallback" component={AsyncEventFallBack} />
                  <Route path="/event/:id" component={AsyncEventDetailedPage} />                  
                  <Route path="/manage/:id" component={UserIsAuthenticated(AsyncEventForm)} />                 
                  <Route path="/profile/:id" component={UserIsAuthenticated(AsyncUserDetailedPage)} />
                  <Route path="/settings" component={UserIsAuthenticated(AsyncSettingsDashboard)} />
                  <Route path="/createEvent" component={UserIsAuthenticated(AsyncEventForm)} />
                  <Route path="/main" component={AsyncMainPage} />
                  <Route path="/notes" component={AsyncNotes} />                  
                  <Route path="/training" component={AsyncTraining} />
                  <Route path="/about" component={AsyncAbout} />
                  <Route path="/contact" component={AsyncContact} />
                  <Route path="/error" component={AsyncNotFound} />
                  <Route path="/test" component={AsyncTest} />
                  <Route component={AsyncNotFound} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
