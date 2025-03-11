import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id : 9,
      welcome: { title: "welcome", sub: "환영합니다." },
      subject: { title: "web", sub: "서브입니다. 111" },
      content: [
        { id: 1, title: "html33", desc: "설명입니다. " },
        { id: 2, title: "css44", desc: "설명입니다.222 " },
        { id: 3, title: "javascript55", desc: "설명입니다.3333 " },
      ],
    };
  }

  render() {
    // console.log("app");

    var _this = this;
    var _title, _desc = null;
    const _state = this.state;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = _state.welcome.sub;
    } else {
      _title = this.state.subject.title;
      _desc = _state.subject.sub;

      const one  = this.state.content.filter(function( item ){
          if( item.id === Number(_this.state.selected_content_id) ){
            return item;
          }          
      });

      // console.log(one);
      if( one && one.length ===  1  ){
        _title = one[0].title;
        _desc = one[0].desc;
      }
    }

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
        <TOC onChangePage={function(id){
          // console.log(id);
          this.setState({mode:'read' , selected_content_id : id });          
        }.bind(this)} data={this.state.content}></TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    );
  }
}

export default App;
