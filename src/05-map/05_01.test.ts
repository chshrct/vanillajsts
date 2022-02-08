import exp from "constants";

type streetType={
    title:string
}


type addressType = {
    number:number
    street:streetType
}
type housesType = {
    buildedAt:number
    repaired:boolean
    address:addressType
}
type addressGovType ={
    street:streetType
}

export type governmentBuildingsType = {
    type:string
    budget:number
    staffCount:number
    address:addressGovType
}
export type testCityType = {
    title:string
    houses:Array<housesType>
    governmentBuildings:Array<governmentBuildingsType>
    citizensCounter:number
}

let city: testCityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget:200000,
            staffCount:200,
            address:{
                street:{
                    title: "Central Str"
                }
            }
        },{
            type: "FIRE-STATION",
            budget:500000,
            staffCount:1000,
            address:{
                street:{
                    title: "South Str"
                }
            }
        }],
        citizensCounter: 999999
    }
})

test('list of streets titles of Gov Buldings',()=>{

    const GovermentBuildingsStreets = (el:testCityType)=> el.governmentBuildings.map(building=>building.address.street.title)
    let list = GovermentBuildingsStreets(city);

    expect(list.length).toBe(2);
    expect(list[0]).toBe('Central Str')
    expect(list[1]).toBe('South Str')
})