import React from 'react';
import { AiOverlay } from '../src/index.js';

export default {
	component: AiOverlay,
	title: 'AiUi/AiOverlay',
	argTypes: {
		color: {
			options: ['#ffebee', '#e0e0e0', '#ffe0b2', '#e8f5e9', '#e3f2fd', '#f3e5f5'],
			control: { type: 'select' }
		}
	}
};


const Template = (args) => <AiOverlay {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: false,
	color: '#e0e0e0'
};
