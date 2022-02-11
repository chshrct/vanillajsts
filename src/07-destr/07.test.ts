export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: number }>,
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Yauheni',
        age: 31,
        lessons: [{title: 1}, {title: 2}],
        address: {
            street: {
                title: 'someStreet'
            }
        }
    }
})

test('',()=>{
    const [lesson1,lesson2]= props.lessons

    expect(lesson1).toStrictEqual({title: 1})
    expect(lesson2).toStrictEqual({title: 2})
})


test('destr', () => {
    const {age, lessons} = props
    const {
        address: {
            street: {
                title
            }
        }
    } = props

    expect(age).toBe(31)
    expect(lessons.length).toBe(2)
    expect(title).toBe('someStreet')
})