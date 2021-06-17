import React from 'react';
import { AiForm, AiInput } from '../src/index.js';

export default {
	component: AiInput,
	title: "AiUi/AiForm/AiInput"
};


const Template = (args) => <AiForm><AiInput {...args} /></AiForm>;

export const Input = Template.bind({});
Input.args = {
	name: "inputFld1"
}

export const InputWithLabelText = Template.bind({});
InputWithLabelText.args = {
	name: "inputFld1",
	label: 'Input Field 1'
}

export const InputAsTextArea = Template.bind({});
InputAsTextArea.args = {
	name: "textAreaFld1",
	type: 'textarea'
}

export const InputAsPassword = Template.bind({});
InputAsPassword.args = {
	name: "passwordFld1",
	type: 'password'
}