import React from 'react';
import { AiToolbar } from '../src/index.js';

export default {
	component: AiToolbar,
	title: 'AiUi/AiToolbar',
	argTypes: {
		color: {
			options: ['#ffffff', '#9e9e9e', '#ff9800', '#4caf50', '#03a9f4', '#00bcd4'],
			control: { type: 'select' }
		}
	},
};


const Template = (args) => <div><AiToolbar {...args}><h6 style={{ fontSize: '20px', margin: 0, marginLeft: 16 }}>Title</h6></AiToolbar>
	<div style={{ paddingTop: (args.height + 4) || 62 }}>
		<div>Start Content</div>
		<h1>Content 1</h1>
		<h1>Content 2</h1>
		<h1>Content 3</h1>
		<h1>Content 4</h1>
		<h1>Content 5</h1>
		<h1>Content 6</h1>
		<h1>Content 7</h1>
		<h1>Content 8</h1>
		<h1>Content 9</h1>
		<div>End Content</div>
	</div></div>;

export const Demo = Template.bind({});
Demo.args = {
	color: '#00bcd4',
	height: 56,
	hideOnScroll: true
};
