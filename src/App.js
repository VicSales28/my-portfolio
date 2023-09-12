// import React, { Component } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import MainPage from './pages/MainPage';
// import DashboardsPage from './pages/DashboardsPage';

// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/dashboards" component={DashboardsPage} />
//             <Route exact path="/my-portfolio" component={MainPage} />
//         </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DashboardsPage from './pages/DashboardsPage';

import "./App.css";

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/my-portfolio/dashboards" element={<DashboardsPage />} />
          <Route exact path="/my-portfolio" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

