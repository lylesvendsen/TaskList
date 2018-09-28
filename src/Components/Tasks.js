import React, { Component } from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

import Grid from 'react-bootstrap/lib/Grid';

class Tasks extends Component {
  deleteTask(id) {
    this.props.onDelete(id);
  }

  toggleTaskComplete(id) {
    this.props.onToggleComplete(id);
  }

  render() {
    let taskItems;

    if (this.props.tasks) {
      taskItems = this.props.tasks.map(task => {
        return (
          <TaskItem onDelete={this.deleteTask.bind(this)} onToggleComplete={this.toggleTaskComplete.bind(this)} key={task.title} task={task} />
        );
      });
    }
    console.log(this.props);
    return (
      <div className="Tasks">
      <Grid>
        {taskItems}
      </Grid>
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func
}

export default Tasks;
