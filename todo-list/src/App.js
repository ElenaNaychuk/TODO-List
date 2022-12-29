import Form from './components/Form.jsx/Form';
import TasksList from './components/TasksList/TaskList';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header>Мои задачи</header>
      <TasksList />
      <Form />
    </div>
  );
}

export default App;
