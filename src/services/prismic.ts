import * as prismic from '@prismicio/client';

// Fill in your repository name
export const repositoryName = 'spiritnews';

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
