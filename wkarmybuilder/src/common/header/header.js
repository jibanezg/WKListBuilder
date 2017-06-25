import React, { Component } from 'react';
import {Navbar, NavItem, Input, Button} from 'react-materialize';

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
        <Input placeholder="Point Limit" onKeyDown={(e)=>this.handleOnEnterPointInput(e)}>
        </Input>
      </NavItem>);
    }else if(this.state.labelOn){
      return(
      <NavItem>
        <Button onClick={this.handleClickOnPointLabel}>/2000</Button>
      </NavItem>);
    }
  }

  toogleLabelAndInput(){
    this.setState({inputOn:!this.state.inputOn});
    this.setState({labelOn:!this.state.labelOn});
  }

  handleClickOnPointLabel(){
    this.toogleLabelAndInput();
  }

  handleOnEnterPointInput(e){
    console.log(this,e);
    if(e.keyCode===13){
      this.toogleLabelAndInput();
    }
  }

  render() {
    return (
      <div>    
        <Navbar className="black" right>
           {this.showHidePointLimit()} 
        </Navbar>
      </div>
    );
  }
}




