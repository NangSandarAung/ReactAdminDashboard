import React, { Component }  from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import Dashboard from './components/dashboard/Dashboard'
import CreateProduct from './components/products/CreateProduct'
import ProductDetails from './components/products/ProductDetails'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/create' component={CreateProduct}/>
            <Route path='/products/:id' component={ProductDetails} />
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }

}

export default App;
