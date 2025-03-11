import { Component } from "react";

// subject
class Subject extends Component{
  render(){
    return (
      <header>
        <h1><a href='/' onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();            
        }.bind(this)}  >{this.props.title}</a></h1>
        {this.props.sub}
        {this.props.test}
      </header>
    )
  }
};

export default Subject;