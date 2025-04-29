import type { Meta, StoryObj } from '@storybook/angular';
import { UIPageGridComponent } from './page-grid.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UIPageGridComponent> = {
  component: UIPageGridComponent,
  title: 'TopNavComponent',
};
export default meta;
type Story = StoryObj<UIPageGridComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/top-nav works!/gi)).toBeTruthy();
  },
};
