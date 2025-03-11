import React, { Component } from 'react'

class UpdateContent extends Component {

  constructor(props){

    super(props);
    this.state = {
      title : this.props.data.title ,
      desc : this.props.data.desc ,
      id : this.props.data.id ,
    };

    this.inputFormHandler = this.inputFormHandler.bind(this);

  };

  inputFormHandler(e){
    this.setState({[e.target.name] : e.target.value });
  }


  render() {

    // console.log(this.props.data);

    return (

      <article>
        <h2>Update</h2>
        <form action="/update" method="post" 
            onSubmit={function(e){
                e.preventDefault();
                alert('수정모드');
                // console.log(e.target.title.value);
               //  debugger;
               this.props.onSubmit( this.state.id , this.state.title , this.state.desc  );
            }.bind(this)}
        >
            <p><input type="text" name="title" placeholder="title" value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
            <input type="text" name="id" value={this.state.id} />
            </p>
            <p><textarea name="desc" placeholder="desc"  value={this.state.desc}
              onChange={this.inputFormHandler}         
            ></textarea></p>
            <p><input type="submit"></input></p>
        </form>
      </article>
    )
  }
}

export default UpdateContent ;