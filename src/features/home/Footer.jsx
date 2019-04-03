import React from 'react';
import { Link } from 'react-router-dom' ;
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment
  
} from 'semantic-ui-react' ;


const Footer = ({history}) => {
  return (
    <div className='footer'>

    <Divider
          as='h2'
          className='header'
          horizontal
          style={{ color:'slateGrey'  }}
        > 
        Alan Cranston
      </Divider>  
    <Segment className='footer' vertical style={{ padding: '1em 0em' }}>

      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h4' content='About' />
              <List link >             
                <List.Item  as={Link} to={`/contact`} >Contact Me</List.Item>                        
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Services' />
              <List link >               
                {/* <List.Item as='a'>FAQ (coming soon...) </List.Item>             */}
                <List.Item  as={Link} to={`/about`} >About</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' >
                e-mail
              </Header>
              <p>AlanCranston@rogers.com</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    </div>  
  );
}

export default Footer;
