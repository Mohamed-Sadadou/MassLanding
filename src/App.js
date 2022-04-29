
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from './component/Pages/LandingPage';
import { React} from 'react';
import Stepper from './component/Composant/Stepper'



function App() {


  

  return (
    
              <Router>
                <div className="App">
                  <div className="principal">
                    <Switch>
                      <Route path="/Landingpage">
                        {<LandingPage/>}
                      </Route>
                      <Route path="/test">
                        {<Stepper/>}
                      </Route>
                      <Redirect to="/Landingpage" />
                    </Switch>
                  </div>
                </div>
              </Router>
            
  );
}

export default App;
