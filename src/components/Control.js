import { Component } from "react";

// Control
class Control extends Component{

  render(){
    return (
      <ul>
        <li><a href='/create' onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
        }.bind(this)} >creat</a></li>
        <li><a href='/update' onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
        }.bind(this)} >update</a></li>
        <li><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
        }.bind(this)} /></li> 
        <li><button onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
        }.bind(this)} >delete</button></li>         
      </ul>
    )
  }
};

export default Control;