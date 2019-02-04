import React from 'react'

import axios from 'axios'

import CarForm from './CarForm'


class CarsNew extends React.Component {
  constructor() {
    super()

    this.state ={
      data: {
        model: '',
        origin: '',
        image: '',
        price: ''

      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }


  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('/api/cars', this.state.data)
      .then(() => this.props.history.push('/cars'))
      .catch(err => alert(err.message))


  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <CarForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default CarsNew
