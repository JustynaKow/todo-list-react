import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTasks, selectHideDone } from "../tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggleDone
          >
            {task.done ? "✓" : ""}
          </Button>
          <Content
            done={task.done}
          >
            {task.content}
          </Content>
          <Button
            onClick={() => dispatch(removeTasks(task.id))}
            remove
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default TaskList;