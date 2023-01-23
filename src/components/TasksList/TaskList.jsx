import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Reorder } from 'framer-motion';
import TaskItem from '../TaskItem/TaskItem';
import { reorderTasks } from '../../store/tasksSlice';

import style from './taskList.module.scss';

function TasksList() {
    const [selectedOption, setSelectedOption] = useState('');

    const tasks = useSelector(state => state.tasks.tasksList);
    const completedTasksCount = tasks.filter(task => task.completed).length;
    const incompleteTasksCount = tasks.length - completedTasksCount;

    const dispatch = useDispatch();

    const setTaskList = (newTasks) => {
        dispatch(reorderTasks(newTasks));
    };

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
            <Reorder.Group as='ul' axys='y' values={tasks} onReorder={setTaskList}>
                {filterTasks(tasks, selectedOption)
                    .map((task) =>
                        <Reorder.Item value={task} key={task.id}>
                            <TaskItem
                                {...task}
                            />
                        </Reorder.Item>
                    )}
            </Reorder.Group>
            <div className={style.list__count}>Выполненные задачи: {completedTasksCount}</div>
            <div className={style.list__count}>Невыполненные задачи: {incompleteTasksCount}</div>
        </section>
    );
}

export default TasksList;