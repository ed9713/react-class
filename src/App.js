import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {

  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id : -1,
      welcome: { title: "welcome", sub: "환영합니다." },
      subject: { title: "web", sub: "서브입니다. 111" },
      content: [
        { id: 1, title: "html33", desc: "설명입니다. " },
        { id: 2, title: "css44", desc: "설명입니다.222 " },
        { id: 3, title: "javascript55", desc: "설명입니다.3333 " },
      ],
    };
  }

  // 현재 선택된 selected 값 가져오기 
  getReadContent(){
    var _this = this;
    const one  = _this.state.content.filter(function( item ){
        if( item.id === Number( _this.state.selected_content_id) ){
          return item;
        }          
    });    
 
    if( one && one.length ===  1  ){
      return one[0];
    }else{
      return [];
    }

  };

  // content 가져오기 
  getContents(){

    var _this = this;
    var _title, _desc , _article = null;
    
    const _state = this.state;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = _state.welcome.sub;

      _article = <ReadContent title={_title} sub={_desc}></ReadContent> ;

    } else if(this.state.mode === "read") {

      _title = this.state.subject.title;
      _desc = _state.subject.sub;

      let one = this.getReadContent();

      // const one  = this.state.content.filter(function( item ){
      //     if( item.id === Number(_this.state.selected_content_id) ){
      //       return item;
      //     }          
      // });    

      
      // if( one && one.length ===  1  ){
      //   _title = one[0].title;
      //   _desc = one[0].desc;
      // }

      if( one  ){
         _title = one.title;
         _desc = one.desc;        
      }

     //  this.selected_content_id = one.id;

      _article = <ReadContent title={_title} sub={_desc}></ReadContent> ;
      
    } else if(this.state.mode === "create") {  
      _article = <CreateContent onSubmit={function(_title, _desc){
          // contenst 에 추가하기
          // console.log("추가하기기");
          // let _content =  _this.state.content;
          // _this.max_content_id =  _this.max_content_id + 1;
          // _content.push({ id: _this.max_content_id  , title: _title , desc: _desc });
          // _this.setState({ content : _content });

          // _this.max_content_id =  _this.max_content_id + 1;
          // _this.state.content.push(
          //   { id: _this.max_content_id  , title: _title , desc: _desc }
          // ); 
          // _this.setState({ content : _this.state.content });

          // _this.max_content_id =  _this.max_content_id + 1;
          // let content = _this.state.content.concat( { id: _this.max_content_id  , title: _title , desc: _desc } );
          // _this.setState({ content : content });


          _this.max_content_id =  _this.max_content_id + 1;
          let content = Array.from(_this.state.content);
          content.push( { id: _this.max_content_id  , title: _title , desc: _desc } );
          _this.setState({ content : content , mode : 'read' , selected_content_id : _this.max_content_id})

          // console.log(this);
          // console.log(_this);

      }}></CreateContent> ;
    } else if(this.state.mode === "update") {  
        let _content = this.getReadContent();
        console.log(_content);
        _article = <UpdateContent data={_content} onSubmit={function(_id , _title, _desc){

          let _content = Array.from(_this.state.content);
          let i = 0; 

          let index = _content.findIndex((item)=>( item.id === _id ));
          console.log(index);
          console.log(_content[index]);


          while( i < _content.length ){
            if( _content[i].id === _id ){
              _content[i].title = _title;
              _content[i].desc = _desc;
              break;
            }
            i++;
          }
          // content.push( { id: _this.max_content_id  , title: _title , desc: _desc } );
          _this.setState({ content : _content , mode : 'read' });       

          // console.log(this);
          // console.log(_this);

      }}></UpdateContent> ;
    }

    return _article;

  };

  render() {
    // console.log("app");


    // console.log("render", this);

    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          test={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <br />
        { /* TOC */ }
        <TOC onChangePage={function(id){
          console.log(id);
          this.setState({mode:'read' , selected_content_id : id });          
        }.bind(this)} data={this.state.content}></TOC>

        { /* control */ }
        <Control onChangeMode={function(_mode){

          if( _mode === 'delete' ){
            if( window.confirm('삭제?') ){
              let _content = Array.from(this.state.content);
              let index = _content.findIndex((item)=>( item.id ===  this.state.selected_content_id ));
              console.log(index);
              console.log(this.state.selected_content_id);
              if( index >= 0 ){
                _content.splice(index, 1);
              }    

              this.setState({ content : _content , mode : 'welcome' });       

            }
          }else{
            this.setState({mode : _mode }); 
          }
             
        }.bind(this)}/>
        {this.getContents()}        
      </div>
    );
  }
}

export default App;
