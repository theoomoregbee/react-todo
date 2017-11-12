import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function Item (props) {
  return (
    <Row>
      <Col xs={9} >
        <h5> <input type='checkbox' value='done' checked={props.item.completed} /> {props.item.title}</h5>
        {props.item.date}
      </Col>
      <Col xs={3}>
        <Button bsStyle='danger' bsSize='small'>Danger</Button>
      </Col>
    </Row>
  )
}

class Task extends Component {
  render () {
    return (
      <div>
        {this.props.tasks.map((item, index) => <Item key={item.id} item={item} />)}
      </div>
    )
  }
}

export default Task
