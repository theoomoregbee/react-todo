import React, { Component } from 'react'
import { FormControl, Panel, Button } from 'react-bootstrap'
import './App.css'

class App extends Component {
  render () {
    return (
      <div style={{width: '400px', margin: 'auto', marginTop: '50px'}}>
        <Panel header={<h3>TODO App</h3>}>
          <FormControl
            type='text'
          // value={this.state.value}
            placeholder='What to do'
         // onChange={this.handleChange}
          />
          <Button className='pull-right' style={{marginTop: '10px'}} bsStyle='primary'>ADD</Button>

        </Panel>
      </div>
    )
  }
}

export default App
