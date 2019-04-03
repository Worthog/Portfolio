import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
// import moment from 'moment';
// import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';
import TextInput from '../../../app/common/form/TextInput';
// import RadioInput from '../../../app/common/form/RadioInput';
import normalizePhone from '../../../app/common/form/normalizePhone' ;

class AboutPage extends Component {
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="About Me" />
        <Form onSubmit={handleSubmit(updateProfile)}>
        
        <label>Name</label>

          <Field
            width={8}
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Name"
          />
         
         <label>Email</label>
        
          <Field 
            name="email" 
            component="input" 
            type="email" 
            placeholder="Email"
          />
        
          <label>Address </label>
          
          <Field
            name="city"
            placeholder="City"
            options={{ types: ['(cities)'] }}
            label="address ( city )"
            component={PlaceInput}
            width={8}
          />

           <label>Phone</label>
       
          <Field
            name="phone"
            component="input"
            type="text"
            placeholder="Phone Number (optional)"
            normalize={normalizePhone}
          />
       

          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(
  AboutPage
);
