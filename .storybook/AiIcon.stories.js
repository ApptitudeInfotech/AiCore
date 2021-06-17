import React from 'react';
import { AiIcon } from '../src/index.js';

export default {
	component: AiIcon,
	title: "AiUi/AiIcon",
	argTypes: {
		color: {
			control: { type: 'color' }
		},
		icon: {
			options: ['stop', 'account_circle', 'home', 'dashboard', 'stars', 'notifications_active'],
			control: { type: 'select' }
		},
		size: {
			options: [14, 20, 24, 32, 48, 64, 96],
			control: { type: 'select' }
		},
	},
};


const Template = (args) => <AiIcon {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	icon: 'account_circle',
	color: '#ff5722',
	size: 24
}
