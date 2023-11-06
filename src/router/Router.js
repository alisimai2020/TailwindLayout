import React from 'react'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main'

import Login from '../components/Login'
import SignUp from '../components/SignUp'


const Router = () => {

  return (
    <div>

        <BrowserRouter>
     
            <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/sigup" element={<SignUp/>} />
                <Route  path='/app' element={<App/>}>
                     <Route index element={<Main/>} />
                </Route>
               
                
            </Routes>
           
        </BrowserRouter>
    </div>
  )
}

export default Router 