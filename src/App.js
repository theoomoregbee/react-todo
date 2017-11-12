import React, { Component } from 'react'
import { FormControl, Well } from 'react-bootstrap'
import './App.css'

class App extends Component {
  render () {
    return (
      // <div className='App'>
      //   <header className='App-header'>
      //     <img src={logo} className='App-logo' alt='logo' />
      //     <h1 className='App-title'>Welcome to React</h1>
      //   </header>
      //   <p className='App-intro'>
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div style={{width: '400px', margin: 'auto', marginTop: '50px'}}>
        <Well>
          <FormControl
            type='text'
          // value={this.state.value}
            placeholder='What to do'
         // onChange={this.handleChange}
          />
        </Well>
      </div>
    )
  }
}

export default App
