import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './add-task.css';

const propTypes = {
  /**
   * Function to add item to the list of tasks in a parent component
   */
  addItem: PropTypes.func.isRequired,
};

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Text value in controlled form input
      entryText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Sets the state of the entry text with the value of the event emitted
   * @param {*} event - Event object emitted by change in controlled text input
   */
  handleChange(event) {
    this.setState({ entryText: event.target.value });
  }

  /**
   * Calls a function passed in to add the entry text to a list of tasks
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.entryText);
    this.setState({ entryText: '' });
  }

  render() {
    return (
      <div className="add-task-container">
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            label="What do you need to do?"
            className="add-task-entry"
            value={this.state.entryText}
            onChange={this.handleChange}
            margin="normal"
          />&nbsp;
          <Button
            className="add-task-submit"
            variant="raised"
            color="primary"
            type="submit"
          >
            Add Task
            <Icon>add</Icon>
          </Button>
        </form>
      </div>
    );
  }
}

AddTask.propTypes = propTypes;

export default AddTask;
