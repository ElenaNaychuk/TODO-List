import TaskAddingForm from './components/TaskAddingForm/TaskAddingForm.jsx';
import TasksList from './components/TasksList/TaskList';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header>Мои задачи</header>
      <TasksList />
      <TaskAddingForm />
    </div>
  );
}

export default App;
