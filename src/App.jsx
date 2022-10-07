import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import Navbar from './Components/Navbar'
import {Route,Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Components/Home';
import { SingleItem } from './Components/SingleItem';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { NotFound } from './Components/NotFound';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/item/:id' element={<SingleItem/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <ToastContainer />
    
    </div>
  )
}

export default App
