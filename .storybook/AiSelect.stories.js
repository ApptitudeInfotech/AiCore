import React from 'react';
import { AiForm, AiSelect } from '../src/index.js';

export default {
	component: AiSelect,
	title: "AiUi/AiForm/AiSelect"
};


const Template = (args) => <AiForm><AiSelect {...args} /></AiForm>;

export const Select = Template.bind({});
Select.args = {
	name: "selectFld1",
	options: [{ label: 'Label1', value: 'value1' }, { label: 'Label2', value: 'value2' },
	{ label: 'Label3', value: 'value3' }, { label: 'Label4', value: 'value4' }]
}


export const WithSelcted = Template.bind({});
WithSelcted.args = {
	name: "preSelcted",
	options: [{ label: 'Label1', value: 'value1' }, { label: 'Label2', value: 'value2' },
	{ label: 'Label3', value: 'value3' }, { label: 'Label4', value: 'value4' }],
	value: 'value3'
}