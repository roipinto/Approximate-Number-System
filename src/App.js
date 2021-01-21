
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TestYourLevel from './Screens/TestYourLevel';
import Login from'./Screens/login';
import HomePage from './Screens/HomePage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Switch>

              <Route path="/TestYourLevel" component={TestYourLevel} />
              <Route path="/HomePage" component={HomePage} />
              <Route path="/Login" component={Login} />



            </Switch>

          </div>
        </div>
      </BrowserRouter>




    </div>
  );
}

export default App;
