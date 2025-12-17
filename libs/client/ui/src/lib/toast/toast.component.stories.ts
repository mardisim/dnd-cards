import type { Meta, StoryObj } from '@storybook/angular';
import { UIToastsContainerComponent } from './toast.component';
import { expect } from 'storybook/test';

const meta: Meta<UIToastsContainerComponent> = {
  component: UIToastsContainerComponent,
  title: 'UIToastsContainerComponent',
};
export default meta;

type Story = StoryObj<UIToastsContainerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/toast/gi)).toBeTruthy();
  },
};
