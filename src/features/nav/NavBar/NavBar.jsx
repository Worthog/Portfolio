import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'
import { NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions'

import { 
  Menu   
  } from 'semantic-ui-react';


const actions = {
  openModal
}

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class NavBar extends Component {


  // handleToggle = () => {
  //   console.log("you clicked the hamburger"); 
  // }

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/')
  };

  render() {
    const { auth, profile} = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty
    return (
      <Menu text borderless >
        {/* <Container> */}
      
          
        <Menu.Item as={NavLink} to="/" name="Home" />
          <Menu.Item as={NavLink} to="/main" name="Main" />
          <Menu.Item as={NavLink} to="/events" name="Events" />         
          <Menu.Item as={NavLink} to="/training" name="Training" />           
          <Menu.Item as={NavLink} to="/about" name="About" />    
          <Menu.Item as={NavLink} to="/contact" name="Contact" />    

          {authenticated ? (
            <SignedInMenu auth={auth} profile={profile} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu register={this.handleRegister} signIn={this.handleSignIn} />
          )}
       
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
