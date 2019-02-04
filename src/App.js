import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'



class App extends React.Component {
  constructor() {
    super()

    this.state= {

      cars: []
    }

  }

  componentDidMount() {
    axios.get('/api/cars')
      .then(res => this.setState({ cars: res.data }))
  }

  render() {

    return (

      <h1>Hello World</h1>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
