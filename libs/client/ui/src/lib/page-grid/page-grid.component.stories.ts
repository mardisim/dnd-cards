import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { UIPageGridComponent } from './page-grid.component';

const meta: Meta<UIPageGridComponent> = {
  component: UIPageGridComponent,
  title: 'UIPageGridComponent',
};
export default meta;

type Story = StoryObj<UIPageGridComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/page-grid/gi)).toBeTruthy();
  },
};
