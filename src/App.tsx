import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import CV from './components/cv/cv';
import Projects from './components/projects/projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/home' Component={Home}></Route>
          <Route path='/cv' Component={CV}></Route>
          <Route path='/projects' Component={Projects}></Route>
          <Route path='*' element={<p>Not Found</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
