import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'



class App extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  componentDidMount(){
    axios.get('/api/cars')
      .then(res => this.setState({ cars: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if(!this.state.cars) return null
    console.log(this.state.cars)
    return (
      <div>
        <h1>Ciao World</h1>
        {this.state.cars.map(car =>
          <p key={car._id}> {car.model} </p>
        )}
      </div>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
