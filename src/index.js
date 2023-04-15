import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/Header';
import { GlobalData } from './components/GlobalData';
import { CountryData } from './components/CountryData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <div>
        <Header />
       <Routes>
          <Route exact path='/' element={<GlobalData />}></Route>
          <Route exact path='/country' element={<CountryData />}></Route>
       </Routes>    
    </div>
    </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<Header />
//<GlobalData />

reportWebVitals();
