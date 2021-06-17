import React from 'react';
import { AiForm } from '../src/index.js';

export default {
	component: AiForm,
	title: "AiUi/AiForm"
};


const Template = (args) => <AiForm {...args} />;

export const Form = Template.bind({});
Form.args = {
	onDone: (f) => console.log('Form', f)
}
