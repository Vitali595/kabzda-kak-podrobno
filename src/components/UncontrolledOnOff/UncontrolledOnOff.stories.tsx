import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action("on or off clicked");

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>;
