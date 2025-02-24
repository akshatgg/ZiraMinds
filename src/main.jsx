import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import ReactDOM from "react-dom/client";
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
   
      <Router>
        
          <App />
        
      </Router>
    
  </>
);
