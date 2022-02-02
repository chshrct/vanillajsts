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

type governmentBuildingsType = {
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

