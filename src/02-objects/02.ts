type technologiesType ={
    id:number
    title:string
}
type cityType={
    title:string
    country:string
}
type addressType={
    streetTitle:string
    city:cityType
}
type studentType = {
    name:string
    age:number
    isActive:boolean
    address:addressType
    technologies:Array<technologiesType>
}



const student:studentType = {
    name:'Evgeniy',
    age:31,
    isActive:true,
    address:{
        streetTitle:'Nezalejnasti',
        city:{
            title:'Minsk',
            country:'Belarus'
        }
    },
    technologies:[
        {
            id:1,
            title:'HTML'
        },
        {
            id:2,
            title:'Javascript'
        },
        {
            id:3,
            title:'React'
        },


    ]
}
console.log(student.technologies[2].title)