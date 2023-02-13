import './App.css';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails'
import { Routes, Route } from "react-router-dom";
import RocketDetails from './components/RocketDetails';

function App() {

  return (
    <div className='App'>
      <h1>SpaceX Launches</h1>
      <Routes>
          <Route path='/' element={<LaunchList />} />
          <Route path='launch/:launchId' element={<LaunchDetails />} />
          <Route path='rockets/:rocketId' element={<RocketDetails />} />
      </Routes>
    </div>
  );
}

export default App;