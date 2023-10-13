

import {BrowserRouter, Routes, Route,Link,NavLink} from 'react-router-dom'
import Home from './component/Home.js'
import About from './component/About.js'
import Contact from './component/Contact.js'
import NotFoundPage  from './component/NotFoundPage.js'

import './App.css'

function App() {
  return (
      <BrowserRouter>
      <ul>
        <li>
        <NavLink className={({isActive})=>isActive ? "navLink" :""}  to="/">Home</NavLink>
       </li>

       <li>      <NavLink className={({isActive})=>isActive ? "navLink" :""} to="/about">About</NavLink>
</li>

<li>
<NavLink className={({isActive})=>isActive ? "navLink" :""}  to="/contact">Contact</NavLink>

</li> </ul>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>

          <Route path='/about' element={<About/>}>
          </Route>       
          
          <Route path='/contact/:name' element={<Contact/>}>
          </Route>

          <Route path='*' element={<NotFoundPage/>}>
          </Route>
         </Routes>
      
      </BrowserRouter>
    
  );
}

export default App;
