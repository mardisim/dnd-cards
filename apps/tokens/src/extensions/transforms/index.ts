import { CustomTransformsBuilder } from '@nxkit/style-dictionary/extensions';
import { DesignToken } from 'style-dictionary/types/DesignToken';

const customTransformsBuilder: CustomTransformsBuilder = () => {
  return {
    'font/weight': {
      type: 'value',
      matcher: function (token: DesignToken) {
        return token.attributes?.font === 'weight';
      },
      transformer: function (token: DesignToken) {
        return parseInt(token.original.value);
      },
    },
  };
};

export default customTransformsBuilder;
