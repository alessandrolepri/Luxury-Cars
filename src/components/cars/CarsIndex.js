import React from 'react'
import axios from 'axios'

import CarCars from './CarCars'



class CarsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      cars: []
    }
  }

  componentDidMount() {
    axios.get('api/cars')
      .then(res => this.setState({ cars: res.data}))
  }

  render () {
    if(!this.state.cars) return null
    return(
      <section className="section">
        <div className="container">

          <div className="columns is-multiline">
            {this.state.cars.map(car =>
              <div className="column is-half desktop" key={car._id}>
                <CarCars {...car} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CarsIndex
