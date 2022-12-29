import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem/TaskItem';
import style from './taskList.module.scss'

function TasksList() {

    const tasks = useSelector(state => state.tasks.tasksList);
    console.log('taskslist cmp:')
    console.log(tasks)

    return (
        <section className={style.list}>
            <select className={style.list__select} name="task-selection">
                <option value="">Все</option>
                <option value="">Выполненные</option>
                <option value="">Невыполненные</option>
            </select>
            <ul className={style.list__tasks}>
                {tasks.map(task => (<TaskItem key={task.id} {...task} />))}
            </ul>
            <div>Выполненные: { }</div>
            <div>Невыполненные: { }</div>
        </section>
    );
}

export default TasksList;