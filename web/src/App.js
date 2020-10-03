import React from 'react';
import './App.css';
import { Grid, Cell, Navigation } from 'react-mdl';
import { ReactComponent as Logo } from './logo.svg';

// import firebase
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Grab firebase variables from /.env.
var API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
var AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
var PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID
});

var db = firebase.firestore();

function App() {
  return (
    <div className="main">
      <Grid className="logo-container">
          <Cell col={12}>
            <Logo className="logo"/>
          </Cell>
      </Grid>
      <Grid className="nav-container">
        <Navigation>
            <a href="#" className="nav-item">Home</a>
            <a href="#" className="nav-item">Link</a>
            <a href="#" className="nav-item">Link</a>
            <a href="#" className="nav-item">Link</a>
        </Navigation>
      </Grid>
      <Grid className="body-container">
        <Cell col={12}>

        </Cell>



        
        <Grid className="footer-container">
          <Cell col={12} className="footer">
              learnmatch | 
              Site made with by <span role="img" aria-label="love">💖</span> Jack Margeson, Team code4edu MakeUC 2020. 
              Check us out on <a href="https://github.com/Soaringnemesis/code4edu" target="_blank" rel="noopener noreferrer">GitHub</a>!
          </Cell>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
