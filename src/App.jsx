import './App.css';

import worldMap from './assets/world_map.png';
import Countries from './components/Countries.jsx';

function App() {

  return (
    <>
      <img src={worldMap}
           alt="world map" />
      <h1>World Regions</h1>
      <Countries />
    </>
  );
}

export default App;
