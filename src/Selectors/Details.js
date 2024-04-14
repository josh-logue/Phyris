import { getThings } from "../utils";
import "./styles.css";

export function Details(props){
    const details = []
    const things = getThings(props.cat)
    const keys = Object.keys(things)
    let index = props.thing
    if (index > keys.length) {
        index = keys.length - 1
    }
    let choice = things[keys[index]]
    const fields = Object.keys(choice)
    for(let i = 0; i < fields.length; i++) {
        const value = fields[i] + ": " + choice[fields[i]]
        details.push(<div className="field" key={fields[i]}>
            <p>{value}</p>
        </div>)
    }
    return <div className="details">
        {details}
    </div>
}