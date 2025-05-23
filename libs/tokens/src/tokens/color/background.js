module.exports = {
  color: {
    background: {
      base: {
        value: '{color.base.white.value}',
        attributes: { font: 'base' },
      },
      alt: {
        value: '{color.base.blue_grey.100.value}',
        attributes: { font: 'base' },
      },
      disabled: {
        value: '{color.base.blue_grey.100.value}',
        attributes: { font: 'base' },
      },
      inverse: {
        value: '{color.base.blue_grey.900.value}',
        attributes: { font: 'inverse' },
      },
      success: {
        value: '{color.base.green.600.value}',
        attributes: { font: 'inverse' },
      },
      error: {
        value: '{color.base.red.600.value}',
        attributes: { font: 'inverse' },
      },
      warning: {
        value: '{color.base.orange.800.value}',
        attributes: { font: 'inverse' },
      },
      info: {
        value: '{color.base.light_blue.600.value}',
        attributes: { font: 'inverse' },
      },
      link: {
        value: '{color.base.light_blue.600.value}',
        attributes: { font: 'inverse' },
      },
      'low-priority': {
        value: '{color.base.grey.600.value}',
        attributes: { font: 'inverse' },
      },

      button: {
        primary: {
          base: { value: '{color.brand.primary.base.value}' },
          disabled: { value: '{color.brand.primary.light.value}' },
          active: { value: '{color.brand.primary.dark.value}' },
        },

        secondary: {
          base: { value: '{color.brand.secondary.base.value}' },
          disabled: { value: '{color.brand.secondary.light.value}' },
          active: { value: '{color.brand.secondary.dark.value}' },
        },
      },

      overlay: {
        light: { value: '#FFFFFFCC' },
        dark: { value: '#00000044' },
      },
    },
  },
};
