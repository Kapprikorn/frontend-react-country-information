import Card from '../../components/Card/Card.jsx';
import { countryService } from '../../services/countryService.js';
import { useState } from 'react';
import './Countries.css';
import worldMap from '../../assets/world_map.png';

export default function Countries() {
  let [countries, setCountries] = useState([]);

  async function getCountries() {
    try {
      const response = await countryService.getCountries();
      setCountries(
        response.map(
          (country, index) => {
            return {
              id: index,
              name: country.name.common,
              flag: country.flags.png,
              population: country.population,
              region: country.region,
            };
          },
        ),
      );
    } catch (e) {
      // error is already logged in the service.
      // TODO: create an error visual on screen for the user.
    }
  }

  return (
    <>
      <img src={worldMap}
           alt="world map" />
      <h1>World Regions</h1>

      {
        (countries.length > 0)
        ? (
          <div className="countries-wrapper">
            {
              countries.sort((a, b) => a.population - b.population).map(country => {
                  return (<Card key={`${country.index}_${country.name}`}
                                name={country.name}
                                flag={country.flag}
                                population={country.population}
                                region={country.region} />);
                },
              )
            }
          </div>
        )
        : (
          <button onClick={() => getCountries()}>
            Get countries from API
          </button>
        )
      }
    </>
  );
}