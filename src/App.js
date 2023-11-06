import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [Open,Setopen]= useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!!localStorage.getItem("isAuthenticated")) {
      navigate("/");
    }
  }, [navigate]);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <div className="flex">


    {isAuthenticated && <Sidebar />}
      
        <div className="flex-1">
        {isAuthenticated && <DashboardView />}
    

      <div>

      <Outlet>
      
    
      </Outlet>   
      </div>
      
      </div>
          
              
          
    </div>
  );
}

export default App;
