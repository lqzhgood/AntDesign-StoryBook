import type { Meta, StoryObj } from '@storybook/react';
import Test from '../../Button/Test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Test(按钮)',
    component: Test,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // primary: true,
        // backgroundColor: 'red',
        // size: 'small',
        // label: '测试按钮',
    },
};
