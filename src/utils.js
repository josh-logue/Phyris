import { Cities } from "./Selectors/Data/Cities";
import { Regions } from "./Selectors/Data/Regions";
import { People } from "./Selectors/Data/People";
import { Events } from "./Selectors/Data/Events";

export function CustomOptions(options, key) {
    let counter = 0
    let optionList = []
    counter += 1
    for (let value of options){
        optionList.push(<option key={key + counter.toString()} value={value}>{value}</option>)
        counter += 1
    }
    return optionList
}

export function getThings(index) {
    let things = Cities

    switch(index) {
        case 1:
            things = Regions
            break
        case 2:
            things = People
            break
        case 3:
            things = Events
            break
        default:
    }

    return things
}