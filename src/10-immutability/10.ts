export type UserType = {
    name:string
    hair:number
    address: {title:string}
}

export type LaptopType = {
    title:string
}


export type UserWithLaptopType = UserType & {laptop:LaptopType}

export function makeHairstyle(u: UserType, power: number) {
    let awesomeUser = {...u}
    
      awesomeUser.hair = awesomeUser.hair / power
      return awesomeUser
    }

    export function moveUser(u: UserWithLaptopType, city:string) {
        return {
            ...u,
            address:{
                ...u.address,
                title:city
            }
        }
    }

    export const upgradeUserLaptop = (u: UserWithLaptopType, laptop:string) => {
            return {
                ...u,
                laptop:{
                    ...u.laptop,
                    title:laptop
                }
            }
    }