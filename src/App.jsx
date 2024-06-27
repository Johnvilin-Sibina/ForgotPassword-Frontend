import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Forgotpw from './Pages/Forgotpw';
import Landing from './Pages/Landing';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/forgotpw' element={<Forgotpw />} />
      <Route path='/landing' element={<Landing />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;