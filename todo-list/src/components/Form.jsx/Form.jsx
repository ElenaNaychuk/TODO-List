import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../store/tasksSlice';
import style from './form.module.scss';

function Form() {
    const [taskText, setTaskText] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const ref = useRef(null);
    useEffect(() => ref.current.focus(), []);

    const validate = (taskText) => {
        let error;
        if (taskText === '') {
            return;
        };
        taskText = taskText.trim();
        if (taskText.length === 0) {
            error = 'Только пробелы!';
        }
        if (taskText.length > 50) {
            error = 'Превышено количество символов!';
        }
        return error;
    }

    const handleChange = (e) => {
        setTaskText(e.target.value);
        setError(validate(e.target.value));
    }

    const addTodo = () => {
        dispatch(addTask({ taskText: taskText.trim() }));
        setTaskText('');
    }

    return (
        <div className={style.form}>
            <p className={style.form__warning}><span>*</span>Не более 50 символов</p>
            <input
                onChange={handleChange}
                className={style.form__input}
                type="text"
                placeholder="Введите задачу"
                value={taskText}
                ref={ref}
            />
            <button
                onClick={addTodo}
                className={style.form__btn}
                disabled={error || taskText === ''}
            >
                Добавить
            </button>
            {error && <div className={style.error}>{error}</div>}
        </div>
    );
}

export default Form;