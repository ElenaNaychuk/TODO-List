import TaskAddingForm from './components/TaskAddingForm/TaskAddingForm.jsx';
import TasksList from './components/TasksList/TaskList';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <header className='header'>Мои задачи</header>
      <img className='logo' src={process.env.PUBLIC_URL + '/assets/images/Logo.svg'} alt="logo" />
      <TaskAddingForm />
      <TasksList />
    </div>
  );
}

export default App;
