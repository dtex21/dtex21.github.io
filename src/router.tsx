import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import CV from './components/cv/cv';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path='' Component={Home}></Route>
          <Route path='cv' Component={CV} index={true}></Route>
          <Route path='*' element={<p><b>404 Not Found</b></p>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
