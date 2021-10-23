import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ListUsers from './components/ListUsers';
import Footer from './components/Footer';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div>
      <Router>
        
          <Header/>

            <div className="container">

              <Switch> 

                <Route exact path = "/" component = {ListUsers}></Route>
                <Route exact path = "/users" component = {ListUsers}></Route>
                <Route exact path = "/add-user/:id" component = {CreateUser}></Route>

              </Switch>

            </div>

          <Footer/>
        
      </Router>
    </div>
    
  );
}

export default App;
