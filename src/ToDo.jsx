import {useState} from "react";

const tasks = [
    {id: 1, text: "Zadanie 1", completed: false},
    {id: 2, text: "Zadanie 2", completed: true},
    {id: 3, text: "Zadanie 3", completed: false},
]

const ToDo = () => {
    const [todos, setTodos] = useState(tasks)

    const removeTasksHandler = (taskId) => {
        setTodos(
            todos.filter(task => {
                return task.id !== taskId;
            })
        )
    }

    const addNewTaskHandler = () => {
        const newTask = {
            id: Math.random().toString(36).substring(7),
            text: "Zupełnie nowe zadanie",
            completed: false
        }

        setTodos([...todos, newTask])
    }

    return(
        <div>
            <h1>Jestem ToDo</h1>
            <ul>
                {
                    todos.map(task => (
                        <li style={{color: "#023047", fontSize: "25px", padding: "15px 0px 15px 0px"}} key={task.id}>
                            {task.text}
                            <button onClick={()=> removeTasksHandler(task.id)} style={{margin: "0px 25px 0px 25px", background: "#03045e", color: "#ffffff"}}>Usuń zadanie {task.id}</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={addNewTaskHandler} style={{background: "#03045e", color: "#ffffff"}}>Dodaj nowe zadania</button>

        </div>
    )
}

export default ToDo