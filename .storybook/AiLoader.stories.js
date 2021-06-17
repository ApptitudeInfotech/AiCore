import React from 'react';
import { AiLoader } from '../src/index.js';

export default {
	component: AiLoader,
	title: "AiUi/AiLoader",
	argTypes: {
		color: {
			control: { type: 'color' }
		},
		size: {
			options: [20, 24, 32, 48, 64, 96],
			control: { type: 'select' }
		},
		overlayColor: {
			options: ['#ffebee', '#e0e0e0', '#ffe0b2', '#e8f5e9', '#e3f2fd', '#f3e5f5'],
			control: { type: 'select' }
		}
	},
};


const Template = (args) => <AiLoader {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: false,
	size: 32,
	color: '#212121',
	overlayColor: '#e0e0e0',
}