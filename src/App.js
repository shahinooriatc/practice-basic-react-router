import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from './Component/About/About';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import UserDetails from './Component/UserDetails/UserDetails';
// import User from './Component/User/User';
function App() {
  return (
    <Router>
      <Header />

      <Switch>

        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/userdetails/:userId'>
          <UserDetails/>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>


        {/* <Route path="/about">
          <About />
        </Route> */}

        {/* <Route path="/user">
          <User/>
        </Route> */}
       
        {/* <Route path='/Country'>
          <Countries />
        </Route> */}
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
