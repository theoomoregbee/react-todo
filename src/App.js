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

  addTask (title) {
    let tasks = this.state.tasks
    let date = new Date()
    tasks.push({title: title, date: date, completed: false})
    this.setState({tasks: tasks})
    this.inputField.value = ''
  }

  render () {
    return (
      <div style={{width: '400px', margin: 'auto', marginTop: '50px'}}>
        <Panel header={<h3>TODO App</h3>}>
          <FormControl
            type='text' 
            placeholder='What to do'
            inputRef={text => { this.inputField = text }}
          />
          <Button className='pull-right' style={{marginTop: '10px'}} bsStyle='primary'
            onClick={() => this.addTask(this.inputField.value)}>ADD</Button>
          <br />
          <h4>Current Tasks</h4>
          <Task tasks={this.state.tasks} />
        </Panel>
      </div>
    )
  }
}

export default App
