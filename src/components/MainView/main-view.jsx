import React, { Component } from 'react';
import List from '@material-ui/core/List';
import './main-view.css';

import Header from '../Header/header';
import AddTask from '../AddTask/add-task';
import ListItem from '../ListItem/list-item';

class MainView extends Component {
  constructor(props) {
    super(props);

    // Restore any persisted tasks from the user's cache
    let persistedTasks = localStorage.getItem('justdoit_tasks');
    if (persistedTasks) {
      persistedTasks = JSON.parse(persistedTasks);
    }

    this.state = {
      // Array of task objects that track an id, the task name, and completion status
      tasks: persistedTasks || [],
    };

    this.addTask = this.addTask.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  /**
   * Adds a new task to the existing list of tasks to do, and marks it initially not completed. Additionally
   * updates the localStorage cache with the current list of tasks so they may be persisted upon a page refresh.
   * @param {String} task - item to add to the tasks list
   */
  addTask(task) {
    const newTasksList = this.state.tasks.slice();
    newTasksList.push({
      id: newTasksList.length,
      task,
      isCompleted: false,
    });
    this.setState({ tasks: newTasksList });
    localStorage.setItem('justdoit_tasks', JSON.stringify(newTasksList));
  }

  /**
   * Toggles the status of the task in the existing task list and stores it back into the list of tasks.
   * Additionally updates the cached task list in localStorage.
   * @param {Number} taskId - the ID of the task to toggle the status for
   */
  toggleStatus(taskId) {
    const newTasksList = this.state.tasks.slice();
    const position = newTasksList.findIndex(task => task.id === taskId);
    newTasksList[position].isCompleted = !newTasksList[position].isCompleted;
    this.setState({ tasks: newTasksList });
    localStorage.setItem('justdoit_tasks', JSON.stringify(newTasksList));
  }

  render() {
    const incompleteTasks = this.state.tasks.filter(task => !task.isCompleted);
    const myList = incompleteTasks.length ? incompleteTasks.map(taskItem =>
      (<ListItem
        key={taskItem.id}
        taskId={taskItem.id}
        isComplete={taskItem.isCompleted}
        taskName={taskItem.task}
        toggleStatus={this.toggleStatus}
      />)) : [];
    const emptyTasksListMessage = 'You don\'t have any tasks to do';

    const completeTasks = this.state.tasks.filter(task => task.isCompleted);
    const completedTasksList = completeTasks.length ? completeTasks.map(taskItem =>
      (<ListItem
        key={taskItem.id}
        taskId={taskItem.id}
        isComplete={taskItem.isCompleted}
        taskName={taskItem.task}
        toggleStatus={this.toggleStatus}
      />)) : [];
    const emptyCompletedTasksListMessage = 'You have not completed any tasks';

    return (
      <div className="main-view-container">
        <div className="main-view-header-container"><Header /></div>
        <AddTask addItem={this.addTask} />
        <div className="tasks-container">
          <h2>My Tasks</h2>
          <div className={incompleteTasks.length ? 'list-white-bg' : ''}>{myList.length ? <List>{myList}</List> : emptyTasksListMessage}</div>
        </div>
        <div className="tasks-container">
          <h2>Completed</h2>
          <div className={completeTasks.length ? 'list-white-bg' : ''}>{completedTasksList.length ? <List>{completedTasksList}</List> : emptyCompletedTasksListMessage}</div>
        </div>
      </div>
    );
  }
}

export default MainView;
