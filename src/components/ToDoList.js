import ToDoListElement from "./ToDoListElement";
import ToDoNewTaskForm from "./ToDoNewTaskForm";
import { useState } from "react";

export default function ToDoList({ className }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAdd = () => {
        if (!title.trim()) return;
        setTasks([...tasks, { title, description }]);
    };

    const handleDelete = (indexToDelete) => {
        setTasks(tasks.filter((_, i) => i !== indexToDelete));
    };

    return (
        <div className={`${className ?? ''} bg-blue-400/60 h-screen p-3 flex flex-col gap-4 overflow-y-scroll`}>
            <ToDoNewTaskForm
                setTitle={setTitle}
                setDescription={setDescription}
                onAdd={(e) => {
                    e.preventDefault(); // zapobiega przeładowaniu strony
                    handleAdd();
                }}
            />
            {tasks.map((task, i) => (
                <ToDoListElement key={i} onDelete={() => handleDelete(i)}
                taskTitle={task.title} taskDescription={task.description} />
            ))}
        </div>
    );
}