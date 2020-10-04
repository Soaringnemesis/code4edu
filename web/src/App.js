import React from 'react';
import './App.css';
import { Grid, Cell, Navigation, Textfield } from 'react-mdl';
import { ReactComponent as Logo } from './logo.svg';
import { useAsync } from "react-async"
import DocumentCard from './DocumentCard.js';

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
var documents = [];
var arrDocumentCards = [];

const getAllMaterialsDocs = async () => {
  const materialsRef = db.collection('materials').orderBy("title");
  //const materialsRef = db.collection('materials').where("title", "contains", ["First Grade Math"])
  const allMaterials = await materialsRef.get()
  for (const doc of allMaterials.docs) {
      documents.push(doc.data());
  }
  return documents;
}
  
const DocumentCards = () => {
  const { data, error, isPending } = useAsync({ promiseFn: getAllMaterialsDocs})
  if (isPending) return "Loading...";
  if (error) return `Something went wrong. ${error.message}`
  if (data)
    arrDocumentCards = [];
    console.log(documents);
    for (var i = 0; i < documents.length; i++) {
      arrDocumentCards.push(
        <DocumentCard key={[i]} className="DocumentCard" 
        title={documents[i].title}
        author={"by " + documents[i].author}
        url={documents[i].link}
        grade={documents[i].grade}
        subject={documents[i].subject}
        />
      )
    }
    return (
      arrDocumentCards
    )
}

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
              <a href="#" className="nav-item">About</a>
              <a href="#" className="nav-item">Team</a>
              <a href="#" className="nav-item">Contact</a>
          </Navigation>
        </Grid>
        <Grid className="body-container">
          <Cell col={12}>
            <Textfield
              onChange={() => {/*WIP*/}}
              label="Search for a subject... (This isn't implemented yet)"
              floatingLabel
              style={{width: '100%', color: "#FFFFFF"}}
            />
          </Cell>
          


          {DocumentCards()}
          
          <Grid className="footer-container">
            <Cell col={12} className="footer">
                learnmatch | 
                Site made with <span role="img" aria-label="love">💖</span> by Jack Margeson, Ruien Luo, Anas Basheer, and Tafadzwa Machengo, Team code4edu MakeUC 2020. 
                Check us out on <a href="https://github.com/Soaringnemesis/code4edu" target="_blank" rel="noopener noreferrer">GitHub</a>!
                &copy; 2020 code4edu
            </Cell>
          </Grid>
        </Grid>
      </div>
    );
}

export default App;
