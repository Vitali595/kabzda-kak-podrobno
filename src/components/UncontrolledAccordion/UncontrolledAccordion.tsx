import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordionMemo(props: AccordionPropsType) {
    console.log("Accordion rendering")

    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}

const AccordionTitle = React.memo(AccordionTitleMemo)

function AccordionBodyMemo() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodyMemo)