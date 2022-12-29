import { useState } from 'react';
import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem/TaskItem';
import style from './taskList.module.scss'

function TasksList() {
    const [selectedOption, setSelectedOption] = useState('Все')

    const tasks = useSelector(state => state.tasks.tasksList)
    const completedTasks = tasks.filter(task => task.completed === true)
    const incompleteTasks = tasks.filter(task => task.completed === false)


    return (
        <section className={style.list}>
            <select className={style.list__select} name="task-selection">
                <option value="Все">Все</option>
                <option value="Выполненные">Выполненные</option>
                <option value="Невыполненные">Невыполненные</option>
            </select>
            <ul className={style.list__tasks}>
                {tasks?.map(task => (<TaskItem key={task.id} {...task} />))}
            </ul>
            <div className={style.list__count}>Выполненные задачи: {completedTasks.length}</div>
            <div className={style.list__count}>Невыполненные задачи: {incompleteTasks.length}</div>
        </section>
    );
}

export default TasksList;