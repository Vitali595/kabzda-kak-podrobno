import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';

import {Rating, RatingPropsType, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
}
const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyStar = Template.bind({});
EmptyStar.args = {
    value: 0,
    onClick: x=>x
}

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    onClick: x=>x
}

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    onClick: x=>x
}

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    onClick: x=>x
}

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    onClick: x=>x
}

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    onClick: x=>x
}

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} onClick={setRating}/>
}

