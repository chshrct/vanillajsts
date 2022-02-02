import {studentType} from "../02-objects/02";
import {addSkill, checkForCity, makeActive} from "./03";

let student: studentType;

beforeEach(() => {
    student = {
        name: 'Evgeniy',
        age: 31,
        isActive: false,
        address: {
            streetTitle: 'Nezalejnasti',
            city: {
                title: 'Minsk',
                country: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'Javascript'
            },
            {
                id: 3,
                title: 'React'
            },


        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
})

test('change student status to active', () => {
    makeActive(student)
    expect(student.isActive).toBe(true)
})

test('does student live in city?', () => {
    let result = checkForCity(student, 'Minsk')
    let result2 = checkForCity(student,'Moscow')
    expect(result).toBe(true)
    expect(result2).toBe(false)
})