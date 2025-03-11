import React , { Component } from 'react';

// TOC
class TOC extends Component{

  // this.props.data

  render(){

    var lists = [];
    var data = this.props.data;
    var i = 0 ;

     while( i < data.length){

       // const item = data[i].id;
      //  lists.push(<li key={data[i].id}>
      //   <a onClick={function(e){
      //     e.preventDefault();
      //    this.props.onChangePage(e.target.dataset.id);
      //   }.bind(this)} 
      //   href={"/content/"+data[i].title}
      //   data-id={data[i].id}>{data[i].title}</a></li>);

       
       lists.push(<li key={data[i].id}>
        <a onClick={function(id, e){
          e.preventDefault();
         // this.props.onChangePage(e.target.dataset.id);
         this.props.onChangePage(id);
        }.bind(this , data[i].id )} 
        href={"/content/"+data[i].title}
        >{data[i].title}</a></li>);     

       i++;
     }

    // console.log(lists);

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default TOC;