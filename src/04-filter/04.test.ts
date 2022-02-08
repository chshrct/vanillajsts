import {cheapPredicate, predicate} from "./04"

test('find oldest people', () => {
    const ages = [16, 25, 3, 76, 45, 34, 90, 100]
    const result = ages.filter(predicate)
    expect(result).toStrictEqual([76, 45, 90, 100])
    expect(result.length).toBe(4)
})

test('find cheap courses', () => {
    const courses = [
        {title: 'CSS', price: 160},
        {title: 'HTML', price: 200},
        {title: 'JS', price: 350}
    ]
    const result = courses.filter(cheapPredicate)
    expect(result).toStrictEqual([{title: 'CSS', price: 160}])
    expect(result.length).toBe(1)
})

test('check for complited tasks', () => {
    const courses = [
        {id: 1,title: 'CSS', isDone: true},
        {id: 2,title: 'HTML', isDone: false},
        {id: 3,title: 'JS', isDone: true},
        {id: 3,title: 'JS', isDone: false}
    ]
    const result = courses.filter(task=>task.isDone)
    expect(result.length).toBe(2)
    expect(result[1]).toStrictEqual({id: 3,title: 'JS', isDone: true})
})