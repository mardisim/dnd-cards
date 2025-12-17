import type { Meta, StoryObj } from '@storybook/angular';
import { UICardBgComponent } from './card-bg.component';
import { expect } from 'storybook/test';

const meta: Meta<UICardBgComponent> = {
  component: UICardBgComponent,
  title: 'UICardBgComponent',
};
export default meta;

type Story = StoryObj<UICardBgComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/card-bg/gi)).toBeTruthy();
  },
};
