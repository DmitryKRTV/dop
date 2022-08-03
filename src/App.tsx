import React, {useEffect, useState} from "react";
import "./App.css";
import {Todolist} from "./Todolist";
import {v1} from "uuid";

type InitialStateType = {
    id: string
    title: string
    isDone: boolean
}

type FetchedType = {
    "userId": number
    "id": number
    "title": string
    "completed": boolean
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let initialState: Array<InitialStateType> = [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]

    let [fetched, setFetched] = useState<Array<FetchedType>>([{
        "userId": 1,
        "id": 2,
        "title": "",
        "completed": true,
    }]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => setFetched(json))
    }, [])


    let [tasks, setTasks] = useState(initialState)


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    );
}

export default App;
