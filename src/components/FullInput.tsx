import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Button from "./Button";
import Input from "./Input";

type FullInoutType = {
    callBack: (title: string)=> void
}

const FullInout = (props: FullInoutType) => {

    const [title, setTitle] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const addTask = () => {
        props.callBack(title);
        setTitle("");
    }


    return (
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <Input />
            <Button name={"+"} callBack={addTask} />
        </div>
    );
};

export default FullInout;
