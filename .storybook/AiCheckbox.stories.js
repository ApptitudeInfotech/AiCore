import React from 'react';
import { AiForm, AiCheckbox } from '../src/index.js';

export default {
	component: AiCheckbox,
	title: "AiUi/AiForm/AiCheckbox"
};


const Template = (args) => <AiForm><AiCheckbox {...args} /></AiForm>;

export const Checkbox = Template.bind({});
Checkbox.args = {
	name: "checkboxFld1",
	options: [
		{ label: 'Label1', value: 'value1' }, { label: 'Label2', value: 'value2' },
		{ label: 'Label3', value: 'value3' }, { label: 'Label4', value: 'value4' }
	],
	selectedValues: ['value2', 'value3'],
	inline: true
}

