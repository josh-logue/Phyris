import { useState } from "react"

export function Collapse(props) {
    const [vis, setVis] = useState(false)
    
    function handle() {
        setVis(!vis)
    }

    return <div>
        <button className="accordion" onClick={handle}>{props.tag}</button>
        <div className="panel" style={{display: vis ? "block" : "none"}}>
            <p>{props.info}</p>
        </div>
    </div>
}