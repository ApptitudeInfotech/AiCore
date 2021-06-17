import React from 'react';
import { AiModal } from '../src/index.js';

export default {
	component: AiModal,
	title: 'AiUi/AiModal',
	argTypes: {
		color: {
			control: { type: 'color' }
		},
		overlayColor: {
			options: ['#ffebee', '#e0e0e0', '#ffe0b2', '#e8f5e9', '#e3f2fd', '#f3e5f5'],
			control: { type: 'select' }
		}
	},
};


const Template = (args) => <AiModal {...args}>
	<div style={{ textAlign: 'center' }}>
		<h1>Content 1</h1>
		<div>Content 2</div>
		<h1>Content 1</h1>
		<div>Content 2</div>
		<h1>Content 1</h1>
		<div>Content 2</div>
		<h1>Content 1</h1>
		<div>Content 2</div>
		<h1>Content 1</h1>
		<div>Content 2</div>
		<h1>Content 5</h1>
		<div>Content 5</div>
	</div>
</AiModal>;

export const Demo = Template.bind({});
Demo.args = {
	title: 'Demo Title',
	opened: false,
	color: '#ffffff',
	overlayColor: '#e0e0e0',
};