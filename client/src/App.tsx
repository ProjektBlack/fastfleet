import './App.css';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/common/sidebar/Sidebar';

import ManageDrivers from './features/drivers/ManageDrivers';

function App() {
  return (
    <BrowserRouter>
    <div className='flex'>
      <div className='w-60 h-screen'>
          <Sidebar /> 
        </div>
        <div className='flex-1'>
        <Routes>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/drivers" element={<ManageDrivers />} />
            {/* <Route path="/trucks" element={<Trucks />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/expenses" element={<Expenses />} /> */}
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
