import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { UISpellCardComponent } from './spell-card.component';

const meta: Meta<UISpellCardComponent> = {
  component: UISpellCardComponent,
  title: 'UISpellCardComponent',
};
export default meta;

type Story = StoryObj<UISpellCardComponent>;

export const Primary: Story = {
  args: {
    spell: {
      id: 'aae7a1cb-84be-451b-a37c-3f524ec66fbd',
      name: 'Aid',
      description:
        "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.<br> <b>At Higher Levels</b>: When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
      ingredients: 'a tiny strip of white cloth',
      range: '30 feet',
      components: 'VSM',
      material: '',
      action: '1 action',
      ritual: false,
      duration: '8 hours',
      concentration: false,
      castingTime: '',
      level: 2,
      school: {
        id: '9229f2b9-e42b-42e6-9b38-55aab1696d93',
        name: 'Abjuration',
      },
      dndClasses: [],
    },
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/spell-card/gi)).toBeTruthy();
  },
};
