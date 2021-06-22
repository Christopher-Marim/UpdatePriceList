import { useState } from "react"

type ButtonProps = {
    text?: string;
}

export function Button(props: ButtonProps){

    const [counter, setCounter] = useState(0)

    return(
        <button onClick={()=>setCounter(counter + 1)}>{counter}</button>
    )
}