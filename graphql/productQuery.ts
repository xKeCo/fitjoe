import { gql } from "graphql-request";

export const productQuery = gql`
  query Product($slug: String!) {
    products(where: { slug: $slug }) {
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
    products {
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
