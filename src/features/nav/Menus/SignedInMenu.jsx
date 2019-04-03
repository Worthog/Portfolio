import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const SignedInMenu = ({signOut, profile, auth}) => {

  let showtest = false;
  if(profile.displayName === 'Mary' || profile.displayName === 'Alan') {
    showtest = true;
  }
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={profile.photoURL || "/assets/user.png"} />
      <Dropdown pointing="top right" text={profile.displayName} >
        <Dropdown.Menu >
          
          {showtest && 
          <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
          }


          {/* <Dropdown.Item text="My Events" icon="calendar" /> */}
          
          <Dropdown.Item as={Link} to={`/profile/${auth.uid}`} text="My Profile" icon="user" />
          {/* <Dropdown.Item as={Link} to="/friends" text="Friends" icon="users" />  */}

          <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />

          {showtest && 
           <Dropdown.Item as={Link} to="/test" text="Test" icon="info" /> 
          }

          {/* <Dropdown.Item as={Link} to="/notes" text="Notes" icon="info" />   */}
          
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;


