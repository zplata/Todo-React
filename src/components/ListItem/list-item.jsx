import React from 'react';
import PropTypes from 'prop-types';
import MaterialListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import './list-item.css';

const propTypes = {
  /**
   * The ID of the task in the list
   */
  taskId: PropTypes.number.isRequired,
  /**
   * The name of the task in the list
   */
  taskName: PropTypes.string.isRequired,
  /**
   * The status of completeness of the task in the list
   */
  isComplete: PropTypes.bool.isRequired,
  /**
   * A function to toggle the completeness status of a task
   */
  toggleStatus: PropTypes.func.isRequired,
};

const ListItem = ({
  taskId,
  taskName,
  isComplete,
  toggleStatus,
}) => (
  <div className="list-item-container">
    <MaterialListItem
      key={taskId}
    >
      <Checkbox checked={isComplete} tabIndex={-1} onClick={() => toggleStatus(taskId)} />
      <ListItemText primary={taskName} />
    </MaterialListItem>
  </div>
);

ListItem.propTypes = propTypes;

export default ListItem;
