import React from 'react'
import { Menu } from 'semantic-ui-react'

const SignedOutMenu = ({signIn, register}) => {
  return (
    <Menu.Item position="right"> 
    <Menu.Item onClick={signIn} content="Sign In" />   
    <Menu.Item onClick={register} content="Register" style={{ marginLeft: '0.5em' }} />   
    {/* <Button onClick={signIn} basic inverted content="Login"  style={{ marginLeft: '0.5em' } />
    <Button
      onClick={register}
      basic
      inverted
      content="Register"
      style={{ marginLeft: '0.5em' }}
    /> */}
          
    </Menu.Item>
  )
}

export default SignedOutMenu
