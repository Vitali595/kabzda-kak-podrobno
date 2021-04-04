import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UserUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} items={[
    {title: "Dimych", value: 1},
    {title: "Valera", value: 2},
    {title: "Vitali", value: 3},
    {title: "Artem", value: 4}
]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} items={[
        {title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Vitali", value: 3},
        {title: "Artem", value: 4}
    ]} onClick={(value) => {alert(`user with ID ${value} should be happy`)}}/>
}