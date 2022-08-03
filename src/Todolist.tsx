import React, {ChangeEvent, KeyboardEvent, MouseEventHandler,MouseEvent, useState} from 'react';
import {FilterValuesType} from './App';
import Button from "./components/Button";
import FullInout from "./components/FullInput";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {


    const onClickHandler2 = (filer: FilterValuesType) => {
        return (e: MouseEvent<HTMLButtonElement>) => {
            console.log(e)
            return (
                props.changeFilter(filer)
            )
        }
    }

    const onClickHandler1 = (filer: FilterValuesType) => {props.changeFilter(filer)}

    const onClickHandler = (t: TaskType) => {props.removeTask(t.id)
    }


    return <div>
        <h3>{props.title}</h3>
        <FullInout callBack={props.addTask}/>
        <ul>
            {
                props.tasks.map(t => {

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={"x"} callBack={()=> {onClickHandler(t)}} />
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={onClickHandler2("all")}>All</button>
            <button onClick={onClickHandler2("active")}>Active</button>
            <button onClick={() => {onClickHandler1("completed")}}>Completed</button>
        </div>
    </div>
}
