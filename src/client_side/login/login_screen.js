import React from "react";
import './login_screen.css'


export default class Login extends React.Component {
  constructor(props){
      super(props);
  }
  login_func(){
    alert('ok');
  }

  render(){
    return(
      <div className = "body">
        רועי פינטוס
        <p/>
        <button id = 'btn1' onClick = {()=>this.login_func()} >
          לחץ עלי
        </button>
      </div>
    );
  };

};