/* --------------- DEFAULT IMPORTS --------------- */ 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


/* ----- MY WRITTEN IMPORTS ----- */ 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Clients } from './pages/Clients';
import { Teams } from './pages/Teams';
import { Checklists } from './pages/Checklists';
import { Settings } from './pages/Settings';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>

        {/* MAIN PAGE NAVIGATION */}
        <Route path='/' element={<Layout/>}></Route>

          {/* CLIENTS */}
          <Route path='/Clients' element={<Clients/>}></Route>

          {/* TEAMS */}
          <Route path='/Teams' element={<Teams/>}></Route>

          {/* CHECKLISTS */}
          <Route path='/Checklists' element={<Checklists/>}></Route>

          {/* SETTINGS */}
          <Route path='/Settings' element={<Settings/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
