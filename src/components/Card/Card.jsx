import './Card.css';
import getRegionColor from '../../helpers/getRegionColor.js';

export default function Card({ flag, name, population, region }) {

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img src={flag}
             alt={`flag of ${name}`}
             className='country-flag' />
        <h4 style={{color:getRegionColor(region)}}>{name}</h4>
      </div>
      <p className="card-footer">Has a population of {population} people</p>
    </div>
  );
}