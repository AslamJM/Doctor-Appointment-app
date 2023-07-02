import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000',
  documents: ['src/graphql/**/*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
