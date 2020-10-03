import React from 'react';
import './App.css';
import { Grid, Cell, Layout,Header, Navigation, Drawer, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Content } from 'react-mdl/lib/Layout';

function App() {
  return (
    <div className="main">
      <Grid>
          <Cell col={12}>test</Cell>
      </Grid>
    </div>
  );
}

export default App;
