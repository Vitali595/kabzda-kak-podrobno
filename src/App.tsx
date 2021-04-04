import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {ItemType} from "./components/Select/Select";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    let [items, setOption] = useState<ItemType[]>([
        {title: "None", value: 1},
        {title: "Minsk", value: 2},
        {title: "Moscow", value: 3},
    ])

    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is App components"}/>
            <PageTitle title={"My friends"}/>*/}
            Article 1
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"User"}/>
            <Accordion
                titleValue={"Menu1"}
                collapsed={accordionCollapsed}
                onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                items={[]}
                onClick={x=>x}
            />
            Article 2
            <UncontrolledRating onChange={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            Article 3
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
