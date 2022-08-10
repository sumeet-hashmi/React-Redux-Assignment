import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import { Routes, Route, Link } from "react-router-dom";
import Fetchapi from './Fetchapi';
import PostPage from './Post'
import Signin from './Signin';
import ProfileInfo from './profile';
import ProtectedRoutes from './protectedroute';
export default function App() {
  return (
    <div>
      <div className='navbar' >
      <Link to="/Home"> Home </Link>
 <Link to="/Contact"> Contact </Link>
 <Link to="/About"> About </Link>
 <Link  to="profileInfo"> Profile </Link>
      </div>
<Routes>
<Route path='/Signin' element={<Signin />} />
  <Route exact path='/Home' element={<Home/>} />
<Route exact path='/Contact' element={<Contact/>} />
<Route exact path='/About' element={<About/>} />
<Route path='/Post' element={<PostPage />}/>
<Route path='/FetchApi' element={<Fetchapi/>}/>
<Route element={<ProtectedRoutes />}>
<Route path='profileInfo' element={<ProfileInfo />} />
</Route>
</Routes>
  

</div>
  );
}