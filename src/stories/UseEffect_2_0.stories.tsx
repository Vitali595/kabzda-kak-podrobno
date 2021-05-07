import React, {useEffect, useState} from "react";

export default {
    title: "useEffect2_0 demo"
}

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        setInterval(() => {
            console.log("tick")
            setCounter((state) => state + 1)
        }, 1000)
    }, [])



    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}



