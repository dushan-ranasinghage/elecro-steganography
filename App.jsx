import React, { Component } from 'react'
import { 
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
 } from 'semantic-ui-react'

export default class App extends Component {
  render() {
    return (
      <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='./electron.svg' style={{ marginRight: '1.5em' }} />
            Electro Steganography
          </Menu.Item>
        </Container>
      </Menu>
  
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Semantic UI React Fixed Template</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
          A text container is used for the main container, which is useful for single column layouts.
        </p>
  

      </Container>
  
    </div>
    )
  }
}
