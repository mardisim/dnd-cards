const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            {
              sourceTag: 'scope:server',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:server'],
            },
            {
              sourceTag: 'scope:client',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:client'],
            },
            {
              "sourceTag": "type:app",
              "onlyDependOnLibsWithTags": [
                "type:feature",
                "type:shell",
                "type:domain",
                "type:api",
                "type:util"
              ]
            },
            {
              "sourceTag": "type:feature",
              "onlyDependOnLibsWithTags": [
                "type:feature",
                "type:api",
                "type:ui",
                "type:domain",
                "type:util",
              ]
            },
            {
              "sourceTag": "type:api",
              "onlyDependOnLibsWithTags": [
                "type:ui",
                "type:domain",
                "type:util"
              ]
            },
            {
              "sourceTag": "type:ui",
              "onlyDependOnLibsWithTags": ["type:domain", "type:ui", "type:util"]
            },
            {
              "sourceTag": "type:domain",
              "onlyDependOnLibsWithTags": ["type:domain", "type:util"]
            },
            {
              "sourceTag": "type:util",
              "onlyDependOnLibsWithTags": ["type:util"]
            }
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
