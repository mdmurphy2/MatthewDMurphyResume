import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './hoc/hoc';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Work from './containers/Work/Work';
import Projects from './containers/Projects/Projects';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Aux>
        <Navbar></Navbar>
        <About></About>
        <Work></Work>
        <Projects></Projects>
      </Aux>
    </BrowserRouter>
  );
}

export default App;
