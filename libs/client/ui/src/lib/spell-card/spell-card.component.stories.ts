import type { Meta, StoryObj } from '@storybook/angular';
import { UISpellCardComponent } from './spell-card.component';

const meta: Meta<UISpellCardComponent> = { component: UISpellCardComponent, title: 'SpellCardComponent' };
export default meta;
type Story = StoryObj<UISpellCardComponent>;

export const Primary: Story = {
  args: {
    spell: {
      name: 'Acid Arrow',
      level: 2,
      description:
        'A shimmering green arrow streaks from your hand and speeds to cross between the tips. Make a ranged spell attack. On a hit, the target takes 4d4 acid damage immediately and 2d4 persistent acid damage at the end of its next turn. On a miss, the arrow flies straight and strikes the nearest creature within range, dealing 4d4 acid damage immediately and 2d4 persistent acid damage at the end of its next turn.',
      index: 'acid-arrow',
      url: '/api/spells/acid-arrow',
      range: '90 feet',
      material: '',
      ritual: false,
      duration: 'Instantaneous',
      concentration: false,
      casting_time: '1 action',
      level_int: 2,
      attack_type: 'ranged',

      damage: {
        damage_at_slot_level: {
          '2': '4d4',
          '3': '2d4',
        },

        damage_type: {
          name: 'Acid',
          url: '/api/damage-types/acid',
        },
      },

      classes: [
        {
          name: 'Sorcerer',
          url: '/api/classes/sorcerer',
        },
        {
          name: 'Wizard',
          url: '/api/classes/wizard',
        },
      ],

      subclasses: [
        {
          name: 'Eldritch Knight',
          url: '/api/subclasses/eldritch-knight',
        },
      ],
    },
  },
};
