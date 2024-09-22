import './Search.css';
import { useState } from 'react';
import { countryService } from '../../services/countryService.js';
import createCountryInfoText from '../../helpers/createCountryInfoText.js';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [countryInfo, setCountryInfo] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);

  async function getCountryInfo() {
    setIsloading(true);
    setCountryInfo({});
    setError('');
    try {
      const response = await countryService.getCountry(searchInput);
      console.log(response[0]);
      setCountryInfo(response[0]);
      setSearchInput('');
    } catch (e) {
      setError(e.message);
    }
    finally {
      setIsloading(false);
    }
  }

  return (
    <main className="search-country-wrapper">
      <h1>Search country information</h1>
      <img src="https://img.freepik.com/free-vector/spinning-globe-isolated-vector_1308-115407.jpg"
           alt="spinning globe"
           width="400" />
      {
        isLoading
        ? <p>De informatie wordt opgehaald... even geduld.</p>
        : <div className="search-bar">
            <input type="text"
                   id="country-search-input"
                   value={searchInput}
                   onChange={(e) => setSearchInput(e.target.value)}
                   onKeyDown={(e) => {if (e.key === 'Enter') getCountryInfo();}}
                   tabIndex="0"
                   className="search-input"
                   placeholder="Bijvoorbeeld Nederland of Peru" />
            <button onClick={() => getCountryInfo()}>ZOEK</button>
          </div>
      }
      {error && <p>Error: {error}</p>}
      {
        Object.keys(countryInfo).length !== 0 &&
        <div className="search-output-wrapper">
          <div className="search-output-header">
            <img src={countryInfo.flags.png}
                 alt={`flag of ${countryInfo.name.common}`}
                 className="country-flag" />
            <h2>{countryInfo.name.common}</h2>
          </div>
          <p className="search-output-footer">
            {createCountryInfoText(countryInfo.name.common, countryInfo.region,
                                   countryInfo.subregion, countryInfo.capital[0],
                                   countryInfo.population, countryInfo.borders,
                                   countryInfo.tld[0])}
          </p>
        </div>

      }
    </main>
  );
}