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
  Icon,
  Search,
  Input,
  Card,
  Label,
  Segment,
  Button,
  Message
 } from 'semantic-ui-react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      isHidden: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    debugger
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

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
        <Message
    icon='inbox'
    header='Choose your image and hide something!'
    content='Effective way to exchange hidden messages without raising suspicion.'
  />
        <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical><Icon name='arrow alternate circle right'/>
</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
        <Label width="4" as="label" htmlFor="file" size="big" style={{cursor: 'pointer'}}>
              <Icon name="file" />
              Select Image
            </Label>
            <input id="file" hidden type="file" onChange={this.handleChange} onClick={() => this.setState({ isHidden: true })} />
            
        </Grid.Column>

        <Grid.Column>
        <img src={this.state.file} height="150px"/>
        {/* <Button primary 
        onClick={() => this.setState({ file: null, isHidden: false })}
        >Clear</Button> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

        </Container>


      </div>
    )
  }
}
