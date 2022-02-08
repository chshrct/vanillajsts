const ages = [16,25,3,76,45,34,90,100]

export const predicate = (age:number)=>age>40


const courses = [
    {title: 'CSS', price: 160},
    {title: 'HTML', price: 200},
    {title: 'JS', price: 350}
]

type courseType={
    title:string
    price:number
}

export const cheapPredicate = (course:courseType)=>course.price<200
