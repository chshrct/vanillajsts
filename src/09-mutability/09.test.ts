import {increaseAge, user} from "./09";





test('user age increased', () => {
        increaseAge(user)
        expect(user.age).toBe(33)

    }
)

test('array test', () => {

     let user1 = [
         {
        name:'Alesha',
        age:32
    },
         {
         name:'aboba',
         age:10
     }
     ]

        let admin = user1;
        admin.push({name:'zeliboba',age:18})
        expect(user1[2]).toEqual({name:'zeliboba',age:18})

    }
)

test('value test', () => {

        let usersCount = 100

        let adminsCount = usersCount
        adminsCount++

        expect(adminsCount).toBe(101)

    }
)