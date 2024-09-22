export default function createCountryInfoText(name, region, subregion, capital, population,
                                              neighbours, domain) {
  let returnText = '';

  // Start of sentence
  returnText += `${name} is situated in `;

  // Swap out the region, if subregion doesn't exist
  subregion
  ? returnText += subregion
  : returnText += region;

  // insert capital
  returnText += ` and the capital is ${capital}. \n`;

  // insert population
  const popInMil = Math.round(population / 1.0e+6) > 0
                   ? Math.round(population / 1.0e+6).toString()
                   : 'less then a';
  returnText += `It has a population of ${popInMil} million people `;

  // insert neighbours
  const amountOfNeighbours = neighbours
                             ? neighbours.length.toString()
                             : 'no';
  returnText += `and it borders with ${amountOfNeighbours} neighbouring countries.\n`;

  // insert domain
  returnText += `Websites can be found on ${domain} domain's.`;

  return returnText;
}