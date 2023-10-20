import { Link } from 'react-router-dom'

import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Registration from "./components/Registration/Registration";
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
