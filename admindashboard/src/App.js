import React, { Component } from 'react'
import Test from './components/Test'
import Nav from './Layout/Nav'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Nav />
        <h1>Welcome Class Component</h1>
        <Test />
      </div>
    )
  }

}

export default App;
