import React from 'react'
import { Link } from 'react-router-dom'


const CarCars = ({ _id, model, image, origin }) => {
  return (
    <div className="card">
      <Link to={`/cars/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{model} </h4>
        </div>

        <div className="card-image">
          <figure className="image" style={{backgroundImage: `url(${image})`}} />
        </div>

        <div className="card-content">
          <div className="content">
            <p>Origin:{origin}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default CarCars
