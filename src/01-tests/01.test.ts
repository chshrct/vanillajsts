import {mult, splitIntoWords, sum} from "./01";


let a:number
let b:number
let c:number

beforeEach(()=>{
    a=1
    b=2
    c=3
})

test('sum should be correct',()=>{


    const result1 = sum(a,b)
    b = 200
    const result2 = sum(b,c)

    expect(result1).toBe(3)
    expect(result2).toBe(203)
})

test('mult should multiply two numbers',()=>{

    a = 4
    b = 7
    c = 8

    const result1 = mult(a,b)
    const result2 = mult(c,b)
    const result3 = mult(a,c)

    expect(result1).toBe(28)
    expect(result2).toBe(56)
    expect(result3).toBe(32)

})

test('splitting into words should be correct',()=>{

    const sentense1 = 'Hello my friend!'
    const sentense2 = 'JS - the best  programming language!'

    const result1 = splitIntoWords(sentense1)
    const result2 = splitIntoWords(sentense2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')
    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})