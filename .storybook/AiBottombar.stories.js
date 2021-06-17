import React from 'react';
import { AiBottombar } from '../src/index.js';

export default {
	component: AiBottombar,
	title: 'AiUi/AiBottombar',
	argTypes: {
		color: {
			options: ['#ffffff', '#9e9e9e', '#ff9800', '#4caf50', '#03a9f4', '#00bcd4'],
			control: { type: 'select' }
		}
	},
};


const Template = (args) => <AiBottombar {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: true,
	color: '#00bcd4',
	height: 56
};