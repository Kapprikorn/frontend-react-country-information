import Card from './Card.jsx';
import { countryService } from '../services/countryService.js';
import { useState } from 'react';

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
      console.error(e);
    }
  }

  return (
    <>
      {
        (countries.length > 0)
        ? (
          countries.map(country => {
            return <Card key={`${country.index}_${country.name}`}
                         name={country.name}
                         flag={country.flag}
                         population={country.population}
                         region={country.region} />;
          })
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