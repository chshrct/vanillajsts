export type peopleType = {
    name: string
    age: number
}

const people: Array<peopleType> = [
    {name: 'Ivanov Egor', age: 27},
    {name: 'Sidorov Evgeniy', age: 16},
    {name: 'Petrov Petr', age: 35},
    {name: 'Dimich Dimichivich', age: 43}
]

const devs = people.map(person => ({
    firstName: person.name.split(' ')[0],
    lastName: person.name.split(' ')[1],
    stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT']
}))