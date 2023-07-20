import { Contact } from './Pages/Contact/contact';
import { Home } from './Pages/Home/home';
import {Route, Routes, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
