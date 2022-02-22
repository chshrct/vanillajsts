import {ManType} from "./07.test";
import React from "react";

type PropsType={
    title:string
    man:ManType
    food:Array<string>
    car:{model:string}
}

export const ManComponent:React.FC<PropsType> = ({title,man:{name},...props})=>{
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
        </div>
    </div>
}