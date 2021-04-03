import {BrowserRouter, Route, Switch} from "react-router-dom"
import Weather from "./components/Weather";
const App = () =>{
  return(
  <BrowserRouter>
  <Switch>
    <Route exact path="/weather" component={Weather}/>
    </Switch>
  </BrowserRouter>    
  )
}
export default App;