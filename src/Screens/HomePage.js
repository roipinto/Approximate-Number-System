import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from "../Firebase/firebase";
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// const storage = firebase.storage().ref()
//import { question1 } from "../Screens/TestAnswers";





class HomePage extends Component {

    // classes = useStyles();


    constructor(props) {
        super(props)
        this.state = {
            url1: '',
        }

        this.getImage1('url1');


    }
    componentDidMount() {

    }
    getImage1(image) {
        let { state } = this
        firebase.storage().ref("images/").child('Home-Page.png').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
            //   console.log('hi');
        }).catch((error) => {
            console.log(error);
            // Handle any errors
        })
    }

    render() {





        return (


            
            <div >


                <h2>שלום! ברוכים הבאים  {this.state.result}</h2>
                <span class="span2" id = "HP"> <img src={this.state.url1} width="560" height="420" alt=""></img> </span>

            </div>
        );
    }
}

export default HomePage;
