import './App.css';

import worldMap from './assets/world_map.png';
import Countries from './pages/Countries/Countries.jsx';
import { useState } from 'react';
import Search from './pages/Search/Search.jsx';

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
            <Countries />
          </>
        )
        : (
          <Search />
        )
      }
    </>
  );
}

export default App;
