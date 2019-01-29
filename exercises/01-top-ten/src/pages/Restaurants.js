import React, { Component } from 'react'
import ReactDOM from 'react-dom'


import restaurants from '../store/restaurants'

class Restaurants extends Component {
  constructor(props){
    super(props)
    const{ match } = props

    this.state={
      restaurantsId: match.params.id
    }
  }

  componentDidUpdate(prevProps){
    const prevMatch = prevProps.match
    const{ match } = this.props
    if(match.params.id != prevMatch.params.id){
      this.setState({restaurantsId: match.params.id})
    }
  }

  render() {
    const{ restaurantsId } = this.state
    const restaurant = restaurants.find((r)=> r.id == restaurantsId)

    return(
      <div>
        {restaurant &&
          <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.location}</p>
            <p>{restaurant.menuItems}</p>
          </div>
        }
      </div>
    )
  }
}

export default Restaurants
