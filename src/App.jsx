import './App.css';

import worldMap from './assets/world_map.png';
import Countries from './components/Countries.jsx';
import { useState } from 'react';

function App() {
  let [applicationMode, setApplicationMode] = useState('regions');

  function switchApplicationModes() {
    (applicationMode === 'regions')
    ? setApplicationMode('search')
    : setApplicationMode('regions');
  }

  return (
    <>
        {
          (applicationMode === 'regions')
          ? (<img src='https://img.freepik.com/free-vector/spinning-globe-isolated-vector_1308-115407.jpg'
                  alt='spinning globe'
                  className='button-change-mode'
                  onClick={() => switchApplicationModes()}/>)
          : (<img src={worldMap}
                  alt="world map"
                  className='button-change-mode'
                  onClick={() => switchApplicationModes()}/>)

        }
      {
        (applicationMode === 'regions')
        ? (
          <>
            <img src={worldMap}
                 alt="world map" />
            <h1>World Regions</h1>
            <Countries />
          </>
        )
        : (
          <>
            <img src='https://img.freepik.com/free-vector/spinning-globe-isolated-vector_1308-115407.jpg'
                 alt='spinning globe' />
            <h1>Search country information</h1>
            <div className='search-bar'
                 placeholder='Bijvoorbeeld Nederland of Peru'>
              <input/>
              <button>ZOEK</button>
            </div>
          </>
        )
      }
    </>
  );
}

export default App;
