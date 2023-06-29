import { useState, useEffect } from "react";

const getInitialTasks = () =>
    JSON.parse(localStorage.getItem("tasks")) || [];

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
};