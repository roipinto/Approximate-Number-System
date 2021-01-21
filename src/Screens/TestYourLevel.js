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





class TestYourLevel extends Component {

    // classes = useStyles();


    constructor(props) {
        super(props)
        this.state = {
            url1: '',
            url2: '',
            url3: '',
            url4: '',
            url5: '',
            url6: '',
            url7: '',
            url8: '',
            url9: '',
            url10: '',
            url11: '',
            url12: '',
            url13: '',
            url14: '',
            url15: '',
            url16: '',
            answer1: 0,
            answer2: 0,
            answer3: 0,
            answer4: 0,
            answer5: 0,
            answer6: 0,
            answer7: 0,
            answer8: 0, 
            open: false,
            result: 0,
        }

        this.getImage1('url1');
        this.getImage2('url2');
        this.getImage3('url3');
        this.getImage4('url4');
        this.getImage5('url5');
        this.getImage6('url6');
        this.getImage7('url7');
        this.getImage8('url8');
        this.getImage9('url9');
        this.getImage10('url10');
        this.getImage11('url11');
        this.getImage12('url12');
        this.getImage13('url13');
        this.getImage14('url14');
        this.getImage15('url15');
        this.getImage16('url16');




    }
    componentDidMount() {

    }

    getImage1(image) {
        let { state } = this
        firebase.storage().ref("images/").child('7-strawberry.png').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
            //   console.log('hi');
        }).catch((error) => {
            console.log(error);
            // Handle any errors
        })
    }

    getImage2(image) {
        let { state } = this
        firebase.storage().ref("images/").child('9-Grapes.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage3(image) {
        let { state } = this
        firebase.storage().ref("images/").child('14-orange.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage4(image) {
        let { state } = this
        firebase.storage().ref("images/").child('21.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage5(image) {
        let { state } = this
        firebase.storage().ref("images/").child('20-orange.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage6(image) {
        let { state } = this
        firebase.storage().ref("images/").child('16-lemon.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage7(image) {
        let { state } = this
        firebase.storage().ref("images/").child('16-lemon.png').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
            //   console.log('hi');
        }).catch((error) => {
            console.log(error);
            // Handle any errors
        })
    }

    getImage8(image) {
        let { state } = this
        firebase.storage().ref("images/").child('14-orange.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage9(image) {
        let { state } = this
        firebase.storage().ref("images/").child('30-Grapes.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage10(image) {
        let { state } = this
        firebase.storage().ref("images/").child('24-apple.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage11(image) {
        let { state } = this
        firebase.storage().ref("images/").child('64.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage12(image) {
        let { state } = this
        firebase.storage().ref("images/").child('24-strawberry.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage13(image) {
        let { state } = this
        firebase.storage().ref("images/").child('24-apple.png').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
            //   console.log('hi');
        }).catch((error) => {
            console.log(error);
            // Handle any errors
        })
    }

    getImage14(image) {
        let { state } = this
        firebase.storage().ref("images/").child('9-Grapes.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage15(image) {
        let { state } = this
        firebase.storage().ref("images/").child('24-apple.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }

    getImage16(image) {
        let { state } = this
        firebase.storage().ref("images/").child('9-Grapes.png').getDownloadURL().then((url) => {
            state[image] = url;
            this.setState(state);
        }).catch((error) => {
            // Handle any errors
        })
    }


    render() {





        return (



            <div >







                <h1>מיון רמה </h1>
                {/* button colors: left : primary   right:  secondary  */}

                <h2>שאלה 1 </h2>
                <h3>מה גדול ממה</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url1} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url2} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

                    this.setState({ answer1: 1 }, () => {
                        console.log(this.state.answer1)
                    });

                }} > שמאל </Button>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

                    this.setState({ answer1: 0 }, () => {
                        console.log(this.state.answer1)
                    });

                }} > ימין </Button>


                <h2>שאלה 2 </h2>
                <h3>מה גדול ממה</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url3} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url4} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

                this.setState({ answer2: 0 }, () => {
                console.log(this.state.answer2)
                });

                }}>שמאל </Button>&nbsp;&nbsp;&nbsp;

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

this.setState({ answer2: 1 }, () => {
    console.log(this.state.answer2)
});

}}>ימין </Button>


                <h2>שאלה 3 </h2>
                
                <h3>(+) מה תוצאת החיבור בין התמונות</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url5} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url6} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

this.setState({ answer3: 1 }, () => {
    console.log(this.state.answer3)
});

}}>36 </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

this.setState({ answer3: 0 }, () => {
    console.log(this.state.answer3)
});

}}>24 </Button>


                <h2>שאלה 4 </h2>
                
                <h3>(-) מה תוצאת החיסור בין התמונות</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url7} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url8} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

this.setState({ answer4: 1 }, () => {
    console.log(this.state.answer4)
});

}}>2 </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

this.setState({ answer4: 0 }, () => {
    console.log(this.state.answer4)
});

}}>4 </Button>


                <h2>שאלה 5 </h2>

                <h3>מה גדול ממה</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url9} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url10} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

this.setState({ answer5: 1 }, () => {
    console.log(this.state.answer5)
});

}}>שמאל </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

this.setState({ answer5: 0 }, () => {
    console.log(this.state.answer5)
});

}}>ימין </Button>


                <h2>שאלה 6 </h2>

                <h3>מה גדול ממה</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url11} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url12} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

this.setState({ answer6: 1 }, () => {
    console.log(this.state.answer6)
});

}}>שמאל </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

this.setState({ answer6: 0 }, () => {
    console.log(this.state.answer6)
});

}}>ימין </Button>


                <h2>שאלה 7 </h2>

                <h3>(+) מה תוצאת החיבור בין התמונות</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url13} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url14} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

this.setState({ answer7: 0 }, () => {
    console.log(this.state.answer7)
});

}}>44 </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

this.setState({ answer7: 1 }, () => {
    console.log(this.state.answer7)
});

}}>33 </Button>


                <h2>שאלה 8 </h2>

                <h3>(-) מה תוצאת החיסור בין התמונות</h3>
                <div class="row justify-content-md-center mdb-lightbox no-margin">

                    <span class="span2"> <img src={this.state.url15} width="320" height="240" alt=""></img> </span>
                    <span class="span2"> <img src={this.state.url16} width="320" height="240" alt=""></img> </span>
                </div>

                <Button variant="contained" color="primary" onClick={() => {

this.setState({ answer8: 1 }, () => {
    console.log(this.state.answer8)
});

}}>15 </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => {

this.setState({ answer8: 0 }, () => {
    console.log(this.state.answer8)
});

}}>20 </Button>

                <h2></h2>
                <Button variant="contained" color="black" onClick={() => {
                let result_temp = this.state.answer1 + this.state.answer2 + this.state.answer3 + this.state.answer4
                 + this.state.answer5 + this.state.answer6 + this.state.answer7 + this.state.answer8 ; 
                console.log(result_temp);
                this.setState({ open: true }, () => {
                    console.log(this.state.open)
                });
                this.setState({ result: result_temp }, () => {
                    console.log(this.state.result)
                });

                
        
                /*--------------------------------------------------------
                this.props.history.push({   //שולחים מידע לעמוד הבא וגם עוברים עמוד
                    pathname: '/FinalScore',
                    result,

                   
                    
                });
     ------------------------------------*/
                }} > סיימתי </Button>



&nbsp;&nbsp;&nbsp;
            <Dialog
                open={this.state.open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"ברוכים הבאים"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    8 ענית נכון על {this.state.result} שאלות מתוך 
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                 
                  <Button color="primary" onClick={() => {
this.props.history.push({   //שולחים מידע לעמוד הבא וגם עוברים עמוד
    pathname: '/HomePage',
   
    
});

}} autoFocus>
                    עבור לדף הבית
                  </Button>
                </DialogActions>
              </Dialog>

            </div>
        );
    }
}

export default TestYourLevel;
