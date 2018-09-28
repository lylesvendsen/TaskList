import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddTask extends Component {
    constructor() {
        super();
        this.state = {
            newTask: {}
        }
    }

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Title is required.');
        } else {
            this.setState({
                newTask: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    status: 'incomplete'
                }
            }, function () {
                this.props.addTask(this.state.newTask);
            });

            this.refs.title.value = '';
            //this.reset();
        }
        e.preventDefault();
    }

    render() {
        return (
            <div id="AddTask">
                <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="sr-only">New Task</label>
                        <div className="input-group">
                            <input type="text" ref="title" className="form-control" placeholder="New Task" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}


AddTask.propTypes = {
    addTask: PropTypes.func
}

export default AddTask;