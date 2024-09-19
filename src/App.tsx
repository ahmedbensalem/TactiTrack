import React from 'react';
import RealTimeTankMovement from './assets/RealTimeTankMovement'; // Correct import
import Dashboard from './components/Dashboard'; // If using a dashboard

const App: React.FC = () => {
  console.log("App is rendering");
  return (
    <div>
      <h1>Military Dashboard</h1>
      <RealTimeTankMovement />
      {/* OR */}
      <Dashboard />
    </div>
  );
};

export default App;
