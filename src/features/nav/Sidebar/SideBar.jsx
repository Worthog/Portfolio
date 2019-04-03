import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'
import { NavLink, withRouter } from 'react-router-dom' ;
import { openModal } from '../../modals/modalActions';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

import {
  Icon,
  Item,
  Menu, 
  Segment,
  Sidebar
  
} from 'semantic-ui-react' ;


const mapState = state => ({
    device: state.home.device,
    loading: state.home.loading,
    auth: state.firebase.auth,
    profile: state.firebase.profile
});


const actions = {openModal};

class SideBar extends Component {

  state = { 
    // loading: false,
    sidebarOpened: false
  }

  handleSignIn = () => {        
     this.props.openModal('LoginModal');
     this.setState({ sidebarOpened: false }); 
 };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
    this.setState({ sidebarOpened: false }); 
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
    this.setState({ sidebarOpened: false }); 
  };

  handleToggle = () => {
    this.setState({ sidebarOpened: !this.state.sidebarOpened })
  }

  handleCloseSidebar = () => {
    // console.log("Close SideBar?");   
    this.setState({ sidebarOpened: false }); 
  }
  
  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
  render() {

  const { auth, profile  } = this.props;
  const authenticated = auth.isLoaded && !auth.isEmpty ;   
  const { sidebarOpened } = this.state ;

  return (
    
    <React.Fragment>
   
     <br/>
    
        <Menu text borderless >
        <Menu.Item>
        <Icon name='sidebar' floated="left" onClick={this.handleToggle} />        
       
        </Menu.Item>

        {authenticated ? (
            <SignedInMenu auth={auth} profile={profile} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu register={this.handleRegister} signIn={this.handleSignIn} />
          )}

        </Menu> 
   
        <Sidebar as={Segment} 
        animation='overlay'       
        visible={sidebarOpened} 
        >  

        <Item attached='top' >                         
        <Icon name='close' onClick={this.handleToggle} />
        </Item>
        <br/>
        
        <Menu vertical style={{ fontSize: '1.5em', color: '#666', marginTop: '1rem' }} >
            <Menu.Item as={NavLink} to="/" name="Home" onClick={this.handleCloseSidebar} />
            <Menu.Item as={NavLink} to="/main" name="Main"  onClick={this.handleCloseSidebar}/>
            <Menu.Item as={NavLink} to="/events" name="Events"  onClick={this.handleCloseSidebar}/>           
            <Menu.Item as={NavLink} to="/training" name="Training" onClick={this.handleCloseSidebar} />
            <Menu.Item as={NavLink} to="/about" name="About" onClick={this.handleCloseSidebar} />
            <Menu.Item as={NavLink} to="/contact" name="Contact" onClick={this.handleCloseSidebar}/>            
              
        </Menu>

      </Sidebar>

    
    </React.Fragment>
  );
  };
};

export default withRouter(withFirebase(connect(mapState, actions )(SideBar)));

