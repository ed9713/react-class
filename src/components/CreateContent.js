import React, { Component } from 'react'

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form action="/create" method="post" 
            onSubmit={function(e){
                e.preventDefault();
               // alert('submit');
                // console.log(e.target.title.value);
               //  debugger;
                this.props.onSubmit( e.target.title.value , e.target.desc.value );
            }.bind(this)}
        >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="desc"></textarea></p>
            <p><input type="submit"></input></p>
        </form>
      </article>
    )
  }
}

export default CreateContent ;