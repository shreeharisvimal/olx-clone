import React, {useContext, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthContext, FireBaseContext } from './Components/store/FireBasecontext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost'

import Posts from './Components/store/PostContext';

function App() {

  const {setUser} = useContext(AuthContext)
  const {Firebase} = useContext(FireBaseContext)
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[Firebase, setUser]) ;
  return (
    <div>
      <Posts>
      <Router>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/signin' Component={Signup}/>
            <Route exact path='/loginin' Component={Login}/>
            <Route path='/create' Component={Create}/>
            <Route path='/post' Component={ViewPost}/>
          </Routes> 
      </Router>
      </Posts>
    </div>
  );
}

export default App;
