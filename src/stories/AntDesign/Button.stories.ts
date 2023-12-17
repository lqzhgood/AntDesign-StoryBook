import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'antd';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Button(按钮)',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     type: {
    //         defaultValue: 'default',
    //         control: {
    //             type: 'inline-radio',
    //         },
    //         options: ['default', 'primary', 'dashed', 'link', 'text'],
    //         description: 'is button',
    //     },
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'xx',
        type: 'primary',
    },
};
