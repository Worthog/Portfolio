import React from 'react';
import { Grid, Header, Item, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// import differenceInYears from 'date-fns/difference_in_years'

const UserDetailedHeader = ({isCurrentUser, profile}) => {
  // let age;
  // if (profile.dateOfBirth) {
  //   age = differenceInYears(Date.now(), profile.dateOfBirth.toDate())
  // } else {
  //   age = 'unknown age'
  // }
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              avatar
              size="small"
              src={profile.photoURL || '/assets/user.png'}
            />
            <Item.Content verticalAlign="bottom">
              <Header as="h1">{profile.displayName}</Header>
              <br />
             
              <Header as="h3">{profile.city || 'unknown city'}</Header>
            </Item.Content>
          </Item>
          <Item>
          {isCurrentUser && <Button as={Link} to="/settings" color="teal" basic content="Edit Profile" />}
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedHeader;
