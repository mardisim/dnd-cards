module.exports = {
  size: {
    padding: {
      tiny: { value: '0.25', comment: 'the tiny space padding ', type: 'paddingSize' },
      small: { value: '0.5', comment: 'the small space padding ', type: 'paddingSize' },
      medium: { value: '1', comment: 'the medium space padding ', type: 'paddingSize' },
      large: { value: '1.5', comment: 'the large space padding ', type: 'paddingSize' },
      xl: { value: '2', comment: 'the extra large space padding ', type: 'paddingSize' },
      xxl: { value: '3', comment: 'the extra extra large space padding ', type: 'paddingSize' },
      base: { value: '{size.padding.medium.value}', comment: 'the base space padding ', type: 'paddingSize' },
    },
  },
};
