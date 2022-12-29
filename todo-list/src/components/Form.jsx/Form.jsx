import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasksSlice';
import style from './form.module.scss'

function Form() {
    const [taskText, setTaskText] = useState('');
    const [error, setError] = useState('')

    const dispatch = useDispatch();

    const validate = (taskText) => {
        console.log(taskText.length);
        let error;
        if (taskText === '') return;
        taskText = taskText.trim();
        if (taskText.length === 0) {
            error = 'Только пробелы!';
        }
        if (taskText.length > 5) {
            error = 'Превышено количество символов!';
        }
        return error;
    }
    const handleChange = (e) => {
        const newTaskText = e.target.value;
        setTaskText(newTaskText);
        setError(validate(newTaskText));
    }
    const addTodo = () => {
        dispatch(addTask({ taskText: taskText.trim() }));
        setTaskText('');
    }
    return (
        <div className={style.form}>
            <p className={style.form__warning}><span>*</span>Не более 100 символов</p>
            <label>
                <input onChange={handleChange}
                    className={style.form__input}
                    type="text"
                    placeholder="Введите задачу"
                    value={taskText}
                />
            </label>
            <button onClick={addTodo} className={style.form__btn}
                disabled={error || taskText === ''}>Добавить</button>
            {error ? <div>{error}</div> : ''}
        </div>
    );
}

export default Form;