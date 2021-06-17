import React from 'react';

import { AiBtn } from '../src/index.js';

export default {
	component: AiBtn,
	title: 'AiUi/AiBtn',
	argTypes: {
		color: {
			control: { type: 'color' }
		},
		contrastColor: {
			control: { type: 'color' }
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' }
		},
		variant: {
			options: ['text', 'outlined', 'contained'],
			control: { type: 'select' }
		}
	},
};

const Template = (args) => <AiBtn {...args}>Button</AiBtn>;

export const Demo = Template.bind({});
Demo.args = {
	variant: 'text',
	color: '#212121',
	size: 'md',
	contrastColor: '#ffffff',
}