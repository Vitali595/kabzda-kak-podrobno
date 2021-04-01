import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {UncontrolledRating, UncontrolledRatingType} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}
const Template: Story<UncontrolledRatingType> = (args) => <UncontrolledRating {...args} />;

const callback = action("rating changet inside component")

export const EmptyStar = Template.bind({});
EmptyStar.args = {
    defaultValue: 0,
    onChange: callback
}

export const UncontrolledRating1 = Template.bind({});
UncontrolledRating1.args = {
    defaultValue: 1,
    onChange: callback
}

export const UncontrolledRating2 = Template.bind({});
UncontrolledRating2.args = {
    defaultValue: 2,
    onChange: callback
}

export const UncontrolledRating3 = Template.bind({});
UncontrolledRating3.args = {
    defaultValue: 3,
    onChange: callback
}

export const UncontrolledRating4 = Template.bind({});
UncontrolledRating4.args = {
    defaultValue: 4,
    onChange: callback
}

export const UncontrolledRating5 = Template.bind({});
UncontrolledRating5.args = {
    defaultValue: 5,
    onChange: callback
}

