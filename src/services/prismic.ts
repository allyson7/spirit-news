import * as Prismic from '@prismicio/client';

// Fill in your repository name
export function getPrismicClient() {
  const prismic = Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  return prismic;
}

export const client = Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});