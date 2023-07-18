import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import { Container } from '../../../common/Container';
import Search from './Search';
import FetchExampleTasksButton from './FetchExampleTasksButton';

function TasksPage() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
