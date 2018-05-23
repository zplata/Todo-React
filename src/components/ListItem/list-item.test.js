import React from 'react';
import { shallow } from 'enzyme';
import MaterialListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from './list-item';

describe('ListItem', () => {
  let component;
  let taskId;
  let taskName;
  let isComplete;
  let toggleStatus;

  beforeEach(() => {
    taskId = 0;
    taskName = 'Test Task';
    isComplete = false;
    toggleStatus = jest.fn();
    component = shallow(
      <ListItem 
        taskId={taskId} 
        taskName={taskName} 
        isComplete={isComplete}
        toggleStatus={toggleStatus} 
      />
    );
  });

  it('contains a material-ui ListItem and Checkbox', () => {
    expect(component.find(MaterialListItem).length).toEqual(1);
    expect(component.find(Checkbox).length).toEqual(1);
    expect(component.find(ListItemText).length).toEqual(1);
  });

  it('invokes the toggleStatus prop function when the checkbox is clicked', () => {
    component.find(Checkbox).simulate('click');
    expect(toggleStatus).toHaveBeenCalledWith(taskId);
  });
});