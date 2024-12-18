module.exports = {
  color: {
    border: {
      light: { value: '{color.base.grey.200.value}' },
      base: { value: '{color.base.grey.300.value}' },
      dark: { value: '{color.base.grey.400.value}' },
      focus: { value: '{color.brand.primary.base.value}' },
      error: { value: '{color.base.red.600.value}' },
      warning: { value: '{color.base.orange.600.value}' },
      success: { value: '{color.base.green.600.value}' },

      button: {
        secondary: {
          base: { value: '{color.border.base.value}' },
          active: { value: '{color.brand.secondary.dark.value}' },
          disabled: { value: '{color.border.light.value}' },
        },
      },
    },
  },
};
