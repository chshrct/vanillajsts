import {studentType} from "../02-objects/02";
import {governmentBuildingsType} from "../02-objects/02_fortest";

export const sum = (a:number,b:number) =>{
    debugger
    return a+b
}


export const addSkill = (st:studentType,skill:string)=>{
    st.technologies.push({
        id:Math.random(),
        title:skill
    })
}


export const makeActive = (st:studentType)=>{
    st.isActive=true
}

export function checkForCity(s:studentType,city:string){
    return s.address.city.title===city
}

export function addMoneyToBudget(building: governmentBuildingsType, number: number){
    building.budget+=number
}