import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { Home } from './component/Home'
  import { About } from './component/About.js'
  import { Login } from './component/Login'
  import { Signup } from './component/Signup'
  import { Calculate } from './component/Calculate'
  import { Algo } from './component/Algo'
  import { Admin} from './component/Admin'



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='About' element={<About />}></Route>
      <Route path='Login' element={<Login />}></Route>
      <Route path='Signup' element={<Signup />}></Route>
      <Route path='Calculate' element={<Calculate />}></Route>
      <Route path='Algo' element={<Algo />}></Route>
      <Route path='Admin' element={<Admin />}></Route>




      </Routes>

      
      
   </BrowserRouter>
  );
}

export default App


