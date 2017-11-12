import React, { Component } from 'react'
import { FormControl, Panel, Button } from 'react-bootstrap'
import Task from './tasks/Task'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

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
          <br />
          <h4>Current Tasks</h4>
          <Task tasks={this.state.tasks} />
        </Panel>
      </div>
    )
  }
}

export default App
