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
                <Icon name='minus' id="menu-item" onClick={()=> window.minimize() }/>
                <Icon name='square outline' id="menu-item"/>
                <Icon name='close' id="menu-item-close" onClick={()=>window.close()}/>
            </div>
            
        </React.Fragment>
    )
  }
}
