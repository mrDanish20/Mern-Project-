
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/News';
import Contact from './Components/Contact';
import Room from './Components/Room';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return (
    <BrowserRouter>

    <div className="App">

    
      <Routes>
     
        <Route path='/' element={<Home />}/>
        <Route path='/Room' element={<Room />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/News' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>


      </Routes>

     
    </div>

    </BrowserRouter>
  );
}

export default App;
