import React from 'react';
import { shallow , mount} from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddTask from './add-task';

describe('AddTask', () => {
  let component;
  let addItem;
  const userText = 'Save this item text';

  beforeEach(() => {
    addItem = jest.fn();
    component = shallow(<AddTask addItem={addItem} />);
  });

  it('contains a material-ui TextField and Button', () => {
    expect(component.find(TextField).length).toEqual(1);
    expect(component.find(Button).length).toEqual(1);
  });

  it('has initial state for entryText as empty string', () => {
    expect(component.state('entryText')).toEqual('');
  });

  it('saves users text in the state if input in the TextField', () => {
    component.find(TextField).simulate('change', { 'target': { 'value': userText }});
    expect(component.state('entryText')).toEqual(userText);
  });

  it('adds the users text to a new task via addItem props function and clears the entryText state on form submit', () => {
    component.find(TextField).simulate('change', { 'target': { 'value': userText }});
    component.find('form').simulate('submit', { 'preventDefault': () => ('')});
    expect(addItem).toHaveBeenCalledWith(userText);
  });
});
