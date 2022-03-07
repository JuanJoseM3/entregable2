import { useState } from 'react';
import './App.css';
import Celsius from './components/Celsius';
import Fahrenheit from './components/Fahrenheit';

function App() {

  const [ units, setUnits ] = useState(true);

  return (
    <div className="App">
      {
        units ? (
          <Celsius 
            units={units} 
            setUnits={setUnits}
          />) : (
            <Fahrenheit 
              units={units} 
              setUnits={setUnits}
            />
        )
      }
    </div>
  );
}

export default App;
