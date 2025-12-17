module.exports = {
  size: {
    font: {
      tiny: { value: '0.75', comment: 'the tiny size of the font', type: 'fontSize' },
      small: { value: '0.875', comment: 'the small size of the font', type: 'fontSize' },
      medium: { value: '1', comment: 'the medium size of the font', type: 'fontSize' },
      large: { value: '1.25', comment: 'the large size of the font', type: 'fontSize' },
      xl: { value: '1.5', comment: 'the extra large size of the font', type: 'fontSize' },
      xxl: { value: '2', comment: 'the extra, extra size of the font', type: 'fontSize' },
      xxxl: { value: '3', comment: 'the largest size of the font', type: 'fontSize' },
      base: { value: '{size.font.medium.value}', comment: 'the base size of the font', type: 'fontSize' },
    },
  },
};
