import { gql } from "graphql-request";

export const productQuery = gql`
  query Product($slug: String!) {
    products(where: { slug: $slug }, stage: PUBLISHED) {
      id
      name
      slug
      description
      price
      images {
        id
        url
      }
      categories {
        id
        name
      }
    }
  }
`;

export const allProductQuery = gql`
  query {
    products(stage: PUBLISHED) {
      id
      name
      price
      slug
      images {
        id
        url
      }
      categories {
        id
        name
      }
    }
  }
`;

export const productSlugQuery = gql`
  query {
    products {
      slug
    }
  }
`;
