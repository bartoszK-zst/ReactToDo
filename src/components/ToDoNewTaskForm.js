export default function ToDoNewTaskForm({setTitle, setDescription, onAdd}){
    return(
        <form className="grid grid-cols-12 bg-blue-600/70 p-2 gap-4 rounded-md">
            <label for="ToDoTaskTitle"
                className="col-span-3 inline-block align-middle">
                Tytuł zadania: 
            </label>
            <input type="text" name="ToDoTaskTitle" id="ToDoTaskTitle"
            onChange={(e) => setTitle(e.target.value)}
                className="col-span-9  bg-gray-100 rounded-md border-2 border-gray-900"></input>
            <label for="ToDoTaskDescription"
                className="col-span-3 inline-block align-middle">
                Opis zadania: 
            </label>
            <textarea type="text" name="ToDoTaskDescription" id="ToDoTaskDescription"
            onChange={(e) => setDescription(e.target.value)}
                className="col-span-9  bg-gray-100  rounded-md border-2 border-gray-900"></textarea>
            <button type="submit" action=""
                onClick={onAdd}
                className="justify-self-end col-span-full p-2.5 rounded-md w-min border-2
                bg-blue-800/70 text-gray-100 text-bold border-gray-200/90">Dodaj</button>
        </form>
    );
}