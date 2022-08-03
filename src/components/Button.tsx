import React, {MouseEvent} from "react";

type ButtonType = {
    name: string
    callBack: ()=> void

}



const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        return props.callBack()
    }

    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    );
};

export default Button;
