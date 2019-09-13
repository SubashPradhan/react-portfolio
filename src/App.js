import React from 'react';
import Button from '@material-ui/core/Button';
import Navigator from './Components/Navigator'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navigator />
      <Button variant="content" color="red">
      Hello
      </Button>
    </div>
  );
}

export default App;
