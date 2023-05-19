import './App.css';
import StateUse from './components/stateUse';

function App() {
  return (
    <>
      <div className="App">
        <h3>Hooks Explained</h3>
        <p>
          Hooks provide a way to manage component state and perform side effects
          such as fetching data from an API or subscribing to events, without
          writing class components.
        </p>
        <p>
          Here we are going to explore Built in Hooks like useState, useEffect,
          useContext, useMemo, useReducer, useRef and useCallback.
        </p>
        <StateUse />
      </div>
    </>
  );
}

export default App;
