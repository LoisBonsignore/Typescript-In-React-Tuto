import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Pour aller cherche automatiquement les props passables mettre le curseur dans le child (TextField ici) et appuyer sur ctrl + space */}
      <TextField text="hello" person={{firstName: "", lastName: ""}}/>
      <Counter>
        {({ count, setCount }) => (<div>
          {count}
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          </div>)}
      </Counter>
    </div>
  );
}

export default App;
