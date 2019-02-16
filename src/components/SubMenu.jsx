import React, { Component } from 'react'
import { 
    Icon,
    Segment
   } from 'semantic-ui-react'

export default class SubMenu extends Component {
  render() {
    return (
        <React.Fragment>
            <div class="sub-menu">
                <Icon name='minus' class="menu-item"/>
                <Icon name='square outline' class="menu-item"/>
                <Icon name='close' class="menu-item close" onClick={()=>window.close()}/>
            </div>
            
        </React.Fragment>
    )
  }
}
