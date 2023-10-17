import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [Open,Setopen]= useState(true);

  return (
    <div className="flex">


      
        <Sidebar/>
      


        <div className="flex-1">
      
      <DashboardView/>

      <div>

      <Outlet>
      
    
      </Outlet>   
      </div>
      
      </div>
          
              
          
    </div>
  );
}

export default App;
