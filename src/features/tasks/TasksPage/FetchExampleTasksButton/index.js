import { useDispatch } from 'react-redux';
import { fetchExampleTasks } from '../../tasksSlice';
import { Button } from '../Button';

const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz Przykładowe zadania
    </Button>
  );
};

export default FetchExampleTasksButton;
