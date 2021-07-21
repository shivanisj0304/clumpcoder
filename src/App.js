
import { PinDropSharp } from "@material-ui/icons"
import {BrowserRouter as Router,Route} from "react-router-dom"

import Footer from "./Component/Footer"
import Login from "./Component/Login"



function App(Props) {
  return (
    <div>
      <Router>
      <Route
        strict
        exact
        component={Footer}
        path="/footer"
        history={Props.history}
      ></Route>
       <Route
        strict
        exact
        component={Login}
        path="/login"
        history={Props.history}
      ></Route>
        </Router>
    </div>
  );
}





export default App;
