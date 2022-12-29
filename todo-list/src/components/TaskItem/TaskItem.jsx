import { useDispatch } from 'react-redux';
import { deleteTask, completedTask } from '../../store/tasksSlice';
import style from './taskItem.module.scss';

function TaskItem({ id, text, completed }) {
    const dispatch = useDispatch();
    return (
        <li className={style.task}>
            <div className={style.task__block}>
                <p onClick={() => dispatch(completedTask({ id }))}
                    className={`${style.task__text} ${completed && style.task__completed}`}>
                    {text}
                </p>
                <button onClick={() => dispatch(deleteTask({ id }))}
                    className={style.task__btn}>Удалить
                </button>
            </div>
        </li>
    );
}

export default TaskItem;