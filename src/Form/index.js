import "./style.css";
import { useState } from 'react';

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        < form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                className="form__field"
                onChange={({target}) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form >
    )
};

export default Form;