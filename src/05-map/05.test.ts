import {peopleType} from "./05";

let people: Array<peopleType>;

beforeEach(()=>{
    people = [
        {name: 'Ivanov Egor', age: 27},
        {name: 'Sidorov Evgeniy', age: 16},
        {name: 'Petrov Petr', age: 35},
        {name: 'Dimich Dimichivich', age: 43}
    ]
})

test('get array of greeting messages',()=>{

    let messages = people.map(person=>`Hello ${person.name.split(' ')[0]}! Welcome to our IT-INCUBATOR!`)

    expect(messages.length).toBe(4)
    expect(messages[0]).toBe(`Hello Ivanov! Welcome to our IT-INCUBATOR!`)
})