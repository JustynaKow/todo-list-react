import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Content, Button, StyledLink } from './styled';
import {
  selectTaskByQuery,
  toggleTaskDone,
  removeTasks,
  selectHideDone,
} from '../../tasksSlice';
import searchQueryParamName from '../searchQueryParamName';
import { toTask } from '../../../../routes';
import { useQueryParameter } from "./../../queryParameters";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.done ? '✓' : ''}
          </Button>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
          </Content>
          <Button onClick={() => dispatch(removeTasks(task.id))} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
