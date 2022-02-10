import {MouseEvent} from "react";

export function User() {

    const buttonCallbackDelete = (event:MouseEvent<HTMLButtonElement>) => {
        console.log(event.target)
        console.log('user deleted')
    }
    const buttonCallbackSave = () => {
        console.log('user saved')
    }
const textAreaChange = ()=>{
        console.log('textarea changed')
}

    return <div>
        <div>Yauheni</div>
        <div><textarea  onChange={textAreaChange}>hello</textarea></div>
        <button onClick={buttonCallbackDelete}>delete</button>
        <button onClick={buttonCallbackSave}>save</button>
    </div>
}