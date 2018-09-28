import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class TaskItem extends Component {
  deleteTask(id) {
    this.props.onDelete(id);
  }

  toggleTaskComplete(id) {
    this.props.onToggleComplete(id);
  }

  render() {
    return (
      <Row className="show-grid TaskItem">
        <Col xs={12} md={8}>
           <strong className={this.props.task.status} >&nbsp;{this.props.task.title}</strong>
        </Col>
        <Col xs={6} md={4}>
        <div className=" pull-right">
          <button className="btn btn-primary btn-xs" onClick={this.toggleTaskComplete.bind(this, this.props.task.id)}><span className="glyphicon glyphicon-ok"></span></button>
          <button className="btn btn-danger btn-xs" onClick={this.deleteTask.bind(this, this.props.task.id)}><span className="glyphicon glyphicon-remove"></span></button>
        </div>
        </Col>
      </Row>
    );
  }
}

export default TaskItem;