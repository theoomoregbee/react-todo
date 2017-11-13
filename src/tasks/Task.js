import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function Item (props) {
  return (
    <Row>
      <Col xs={9} >
        <h5> <input type='checkbox' value='done' checked={props.completed} /> {props.title}</h5>
        {props.date.toString()}
      </Col>
      <Col xs={3}>
        <Button bsStyle='danger' bsSize='small' onClick={() => props.onDelete(props.date)}>Danger</Button>
      </Col>
    </Row>
  )
}

class Task extends Component {
  render () {
    return (
      <div>
        {this.props.tasks.map((item, index) => <Item key={item.date} {...item} onDelete={this.props.onDelete} />)}
      </div>
    )
  }
}

export default Task
