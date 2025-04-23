import type { Meta, StoryObj } from '@storybook/angular';
import { TopNavComponent } from './top-nav.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TopNavComponent> = {
  component: TopNavComponent,
  title: 'TopNavComponent',
};
export default meta;
type Story = StoryObj<TopNavComponent>;

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
