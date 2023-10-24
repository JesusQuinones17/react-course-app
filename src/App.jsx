import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import { Provider } from 'react-redux';

import { store } from './store/index.js';

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Header />
        <Courses />
      </div>

    </div>
  );
}

export default App;
