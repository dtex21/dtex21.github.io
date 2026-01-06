import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import CV from './components/cv/cv';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/home' Component={Home} index={true}></Route>
          <Route path='/cv' Component={CV}></Route>
          <Route path='*' element={<p><b>404 Not Found</b></p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
