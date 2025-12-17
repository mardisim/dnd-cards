import type { Meta, StoryObj } from '@storybook/angular';
import { UICardComponent } from './card.component';
import { expect } from 'storybook/test';

const meta: Meta<UICardComponent> = {
  component: UICardComponent,
  title: 'UICardComponent',
};
export default meta;

type Story = StoryObj<UICardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/card/gi)).toBeTruthy();
  },
};
