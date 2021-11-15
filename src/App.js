import React from 'react';
import { Navbar,Routes } from './components';
const App = () => {
  return (
    <div className="App flex">
      <div className="navbar flex">
        <Navbar />
      </div>
      <div className="main flex flex-1 bg-gray-50">
        <div className="flex-1 p-6 text-2xl font-bold">
         <Routes />
        </div>
        <div className="footer">

        </div>
      </div>

    </div>
  );
}

export default App;