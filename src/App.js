import React, { Component } from 'react';
import './App.css';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import uuid from 'uuid';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  saveTasks(tasks){
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  getTasks() {
    this.setState({ tasks: JSON.parse(localStorage.getItem('tasks'))});
  }

  getTasksOd() {
    this.setState({
      tasks: [
        {
          id: uuid.v4(),
          title: 'Business Web Site',
          status: 'complete'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          status: 'incomplete'
        },
        {
          id: uuid.v4(),
          title: 'Ecom Shopping Cart',
          status: 'incomplete'
        }
      ]
    });
  }

  componentWillMount() {
    this.getTasks();
  }

  componentDidMount() {
    this.getTasks();
  }

  handleAddTask(task) {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.saveTasks(tasks);
  }

  handleDeleteTask(id) {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(x => x.id === id);
    tasks.splice(index, 1);
    this.saveTasks(tasks);
  }

  handleCompleteToggleTask(id) {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(x => x.id === id);
    if(tasks[index].status !== 'complete'){
      tasks[index].status = 'complete';
    }else{
      tasks[index].status = 'incomplete';
    }
    this.saveTasks(tasks);
  }

  render() {
    return (
      <div className="App">
      <h2>Task List</h2>
        <AddTask addTask={this.handleAddTask.bind(this)} />
        <Tasks onDelete={this.handleDeleteTask.bind(this)} onToggleComplete={this.handleCompleteToggleTask.bind(this)} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
