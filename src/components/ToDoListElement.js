export default function ToDoListElement({ taskTitle, taskDescription, onDelete }) {

    return (
        <div className="grid grid-cols-12 grid-rows-2 auto-cols-max grid-flow-row-dense
             bg-blue-500/60 p-2 rounded-md">
            <h2 className="col-span-full col-end-11">
                {taskTitle}
            </h2>
            <p className="col-span-full col-end-11">
                {taskDescription}
            </p>
            <button
                onClick={onDelete}
                className="bg-red-600/70 text-gray-200/90 border-gray-900
                rounded-md border-2 p-2.5 text-bold self-top row-span-2 col-span-2"
            >
                Usuń
            </button>
        </div>
    );
}