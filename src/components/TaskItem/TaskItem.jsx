import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../../store/tasksSlice';

import style from './taskItem.module.scss';

function TaskItem({ id, text, completed }) {
    const dispatch = useDispatch();

    return (
        <div
            className={style.task}
            data-completed={completed || null}
        >
            <div className={style.task__block}>
                <input
                    onClick={() => dispatch(toggleTaskCompletion({ id }))}
                    className={style.task__checkbox}
                    type="checkbox"
                    defaultChecked={completed}
                />
                <p className={style.task__taskText}>{text}</p>
                <button
                    onClick={() => dispatch(deleteTask({ id }))}
                    className={style.task__btn}
                >
                    &#10006;
                </button>
            </div>
        </div>
    );
}

export default TaskItem;