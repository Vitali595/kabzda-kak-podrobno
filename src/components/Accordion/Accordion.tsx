import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionMemo(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

export const Accordion = React.memo(AccordionMemo)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
}

const AccordionTitle = React.memo(AccordionTitleMemo)

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodyMemo(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodyMemo)