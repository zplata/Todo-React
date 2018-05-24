import React from 'react';
import { shallow , mount} from 'enzyme';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import MainView from './main-view';

describe('MainView', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MainView />);
  });

  it('contains all components within the view', () => {
    expect(component.find('Header').length).toEqual(1);
    expect(component.find('AddTask').length).toEqual(1);
  });

  describe('Incomplete tasks', () => {

    describe('When there are no items in this list', () => {
      it('displays an appropriate message if there are no tasks in the my tasks column', () => {
        expect(component.find('.tasks-container').first().text()).toContain('You don\'t have any tasks to do');
      });
    });

    describe('When there are items present in the list', () => {
      function addItemsToState() {
        component.setState({
          tasks: [
            {
              id: 0,
              task: 'Uncompleted item',
              isCompleted: false,
            }
          ],
        });
      }

      it('displays a List of ListItems for each uncompleted task', () => {
        addItemsToState();
        expect(component.find('.tasks-container').first().find(List).length).toEqual(1);
        expect(component.find('.tasks-container').first().find('ListItem').length).toEqual(1);
      });

      it('toggles the status of a task if a listitem toggle is clicked', () => {
        component = mount(<MainView />);
        addItemsToState();
        component.find('ListItem').find(Checkbox).simulate('click');
        expect(component.state('tasks')[0].isCompleted).toBeTruthy();
      });

      // TODO: Add a test for testing the addTask trigger changing state and updating the list
    });
  });

  // TODO: Mirror the Incomplete Tasks tests
  describe('Completed Tasks', () => {

  });
});
