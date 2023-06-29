import { useState, useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { StyledForm, Input , Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from '../tasksSlice';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const contentTrimmed = newTaskContent.trim();

        if (contentTrimmed !== "") {
            setNewTaskContent("");
            inputRef.current.focus();
        };

        dispatch(addTask({
            content: contentTrimmed,
            done: false,
            id: nanoid(),
        }));
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
                autoFocus
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm >
    )
};

export default Form;