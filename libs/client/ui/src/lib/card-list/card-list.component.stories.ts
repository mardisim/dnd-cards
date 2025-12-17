import type { Meta, StoryObj } from '@storybook/angular';
import { UICardListComponent } from './card-list.component';
import { expect } from 'storybook/test';

const meta: Meta<UICardListComponent> = {
  component: UICardListComponent,
  title: 'UICardListComponent',
};
export default meta;

type Story = StoryObj<UICardListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/card-list/gi)).toBeTruthy();
  },
};
