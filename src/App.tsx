import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import SideProjects from './routes/side-projects/side-projects.component';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='sideprojects' element={<SideProjects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
