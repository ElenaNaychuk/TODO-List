import { useState } from 'react';
import { useSelector } from 'react-redux';

import TaskItem from '../TaskItem/TaskItem';

import style from './taskList.module.scss'

function TasksList() {
    const [selectedOption, setSelectedOption] = useState('')

    const tasks = useSelector(state => state.tasks.tasksList);

    const completedTasksCount = tasks.filter(task => task.completed).length;
    const incompleteTasksCount = tasks.length - completedTasksCount;

    function filterTasks(tasks, selectedOption) {
        let filterFn;
        switch (selectedOption) {
            case "completed":
                filterFn = task => task.completed;
                break;
            case "incomplete":
                filterFn = task => !task.completed;
                break;
            case "all":
            default:
                filterFn = task => true;
                break;
        }
        return tasks.filter(filterFn);
    }

    const today = new Date();
    const todeyData = today.toLocaleDateString('en-US');

    return (
        <section className={style.list}>
            <div className={style.task__title}>
                <div className={style.task__titleText}>Сегодня</div>
                <div className={style.task__date}>{todeyData}</div>
            </div>
            <div className={style.list__tasks_all}>
                <h5 className={style.list__taskNumber}>{tasks.length} задач</h5>
                <select
                    onChange={e => setSelectedOption(e.target.value)}
                    className={style.list__select}
                    name="task-selection"
                    value={selectedOption}
                >
                    <option value="all">Все</option>
                    <option value="completed">Выполненные</option>
                    <option value="incomplete">Невыполненные</option>
                </select>
            </div>
            <ul className={style.list__tasks}>
                {filterTasks(tasks, selectedOption)
                    .map(task => <TaskItem key={task.id} {...task} />)}
            </ul>
            <div className={style.list__count}>Выполненные задачи: {completedTasksCount}</div>
            <div className={style.list__count}>Невыполненные задачи: {incompleteTasksCount}</div>
        </section>
    );
}

export default TasksList;