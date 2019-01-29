import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import restaurants from './store/restaurants'
import Restaurants from './pages/Restaurants'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      restaurants: restaurants
    }
  }
  render() {
    const{ restaurants } = this.state

    return (
      <Router>
        <div>
          <nav>
            <h2>Restaurants</h2>
            <ul>
              {restaurants.map((restaurants)=>
                <li>
                  <Link to={`/restaurants/${restaurants.id}`}>
                    {restaurants.name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <Switch>
            <Route
              path="/restaurants/:id"
              component={Restaurants}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
