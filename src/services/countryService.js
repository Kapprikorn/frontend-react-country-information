import axios from 'axios';

export const countryService = {
  getCountries: async function() {
    try {
      const result = await axios.get(
        'https://restcountries.com/v3.1/all',
        );
      return result.data;
    }
    catch(error) {
      console.error(error);
    }
  },

}


