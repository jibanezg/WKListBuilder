import React, { Component } from 'react';
import {Navbar, NavItem, Input} from 'react-materialize';

export default class Header extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      labelOn: true,
      inputOn: false
    }
    this.handleClickOnPointLabel = this.handleClickOnPointLabel.bind(this);         
  } 

  showHidePointLimit(){
    if(this.state.inputOn){
      return (
      <NavItem>
        <Input placeholder="Point Limit" onClick={this.handleClickOnPointLabel}>
        </Input>
      </NavItem>);
    }else if(this.state.labelOn){
      return(
      <NavItem className="hidden">
        <Input className="white-text" defaultValue="/2000" disabled>
        </Input>
      </NavItem>);
    }
  }

  toogleLabelAndInput(){
    this.setState(!this.state.inputOn);
    this.setState(!this.state.labelOn);
  }

  handleClickOnPointLabel(e){
    this.toogleLabelAndInput();
  }

  render() {
    return (
      <div className="Bla">    
        <Navbar className="black" right>
           {this.showHidePointLimit()} 
        </Navbar>
      </div>
    );
  }
}




