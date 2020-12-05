import React from 'react';
import './App.css';
import ColorView from './task1/ColorView';


function App() {
  return (<React.Fragment>
    <div className="task-1">
      <ColorView /> 
    </div>
    <div className="task-2">
      <ColorView /> 
    </div>
    <div className="task-3">
      <ColorView /> 
    </div>
  </React.Fragment>);
}

export default App;
