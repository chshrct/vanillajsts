import { makeHairstyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType } from "./10";

test('hairdresser test',()=>{

    let user:UserType = {
        name:'Mathew',
        hair:45,
        address:{
            title:'new-york'
        }
    }

    let copy = makeHairstyle(user,5)

    expect(copy.hair).toBe(9)
    expect(user.hair).toBe(45)
    expect(copy.address).toBe(user.address)
})

test('change address',()=>{

    let user:UserWithLaptopType = {
        name:'Mathew',
        hair:45,
        address:{
            title:'new-york'
        },
        laptop:{
            title:'Asus'
        }
    }

    let movedUser = moveUser(user,'Kiev')

    expect(movedUser).not.toBe(user)
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.address.title).toBe('Kiev')
    expect(movedUser.laptop).toBe(user.laptop)
})

test('upgrade user laptop',()=>{

    let user:UserWithLaptopType = {
        name:'Mathew',
        hair:45,
        address:{
            title:'new-york'
        },
        laptop:{
            title:'Asus'
        }
    }

    let userWithNewLaptop = upgradeUserLaptop(user,'Macbook')

    expect(userWithNewLaptop).not.toBe(user)
    expect(userWithNewLaptop.laptop).not.toBe(user.laptop)
    expect(userWithNewLaptop.laptop.title).toBe('Macbook')
    expect(userWithNewLaptop.address).toBe(user.address)
})