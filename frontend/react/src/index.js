import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import MainUI from './components/MainUI';
import { BrowserRouter as Router } from 'react-router-dom';
import First from './components/First';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

              <Router>
                <App/>

              </Router>
);


reportWebVitals();
