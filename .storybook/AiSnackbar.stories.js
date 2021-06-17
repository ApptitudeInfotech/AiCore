import React from 'react';
import { AiSnackbar } from '../src/index.js';

export default {
	component: AiSnackbar,
	title: 'AiUi/AiSnackbar',
	argTypes: {
		kind: {
			options: ['default', 'info', 'error', 'success', 'warning'],
			control: { type: 'select' }
		}
	},
};


const Template = (args) => <AiSnackbar {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: false,
	message: 'Test Message text 1',
	kind: 'default',
};