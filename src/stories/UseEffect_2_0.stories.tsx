import React, {ChangeEvent, useEffect, useState} from "react";

export default {
    title: "useEffect2_0 demo"
}

export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample")

    useEffect(() => {
        const intervalId = setInterval(() => {
            // console.log("tick")
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        return () => {
            console.log("RESET EFFECT: " + counter)
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.addEventListener("keypress", handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText("3 seconds passed")
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}



