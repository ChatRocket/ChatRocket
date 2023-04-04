import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import InstancesModal from './InstancesModal';

export default {
	title: 'Admin/Info/InstancesModal',
	component: InstancesModal,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		onClose: { action: 'onClose' },
	},
} as ComponentMeta<typeof InstancesModal>;

const Template: ComponentStory<typeof InstancesModal> = (args) => <InstancesModal {...args} />;

export const Default = Template.bind({});
Default.storyName = 'InstancesModal';
Default.args = {
	instances: [
		{
			address: 'http://localhost:3000',
			broadcastAuth: false,
			currentStatus: {
				connected: true,
			},
			instanceRecord: {
				_updatedAt: '00-00-00',
				_createdAt: '00-00-00',
				_id: 'instance-id',
				name: 'instance-name',
				pid: 123,
				extraInformation: {
					host: '127.0.0.1',
					nodeVersion: 'v14.18.2',
					port: '',
					tcpPort: 123,
					os: {
						type: 'macOSX',
						platform: '',
						arch: 'x64',
						release: '236',
						uptime: 10,
						loadavg: [123, 123],
						totalmem: 123,
						freemem: 123,
						cpus: 8,
					},
				},
			},
		},
	],
};
