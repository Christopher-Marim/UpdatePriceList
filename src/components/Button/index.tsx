import { useState } from "react"

type ButtonProps = {
    text?: string;
}

export function Button(props: ButtonProps){

    const [counter, setCounter] = useState(0)

    return(
        <div>           
            <h1>{props.text}</h1>
            <button onClick={()=>setCounter(counter + 1)}>{counter}</button>
        </div>
    )
}