import { useState } from 'react';
import { Container, Field, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const contentTrimmed = newTaskContent.trim();

        if (contentTrimmed !== "") {
            addNewTask(contentTrimmed);
            setNewTaskContent("");
        };
    };

    return (
        <Container onSubmit={onFormSubmit}>
            <Field
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </Container >
    )
};

export default Form;