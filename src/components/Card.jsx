import './Card.css';
import getRegionColor from '../helpers/getRegionColor.js';

export default function Card({ flag, name, population, region }) {

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img src={flag}
             alt={`flag of ${name}`}
             className='country-flag' />
        <p style={{color:getRegionColor(region)}}>{name}</p>
      </div>
      <p className="card-footer">Has a population of {population}</p>
    </div>
  );
}