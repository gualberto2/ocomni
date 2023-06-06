import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

// This is a variable, it has the objects for the posts. Will be fetched in the Post Query.
const featuredImage = `
    image {
      url
    }

`;

const post = `
    featuredImage {
      url
    }
    content {
      html
    }
    author {
      id
      name
      bio
      roles
      photo {
        url
      }
    }
    title
    slug
    id
    createdAt
    updatedAt
    excerpt
`;

// This is a variable, it has the objects for the categories. Will be fetched in the Categories Query.
const category = `
    id,
    slug,
    title
`;

// This is a variable, it has the objects for the comments. Will be fetched in the Categories Query.
const comment = `
    id
    name
    email
    comment
`;

export const QUERY_POSTS = gql`
  {
    posts(orderBy: updatedAt_DESC, first: 4){
        ${post}
        categories(){
            ${category}
        }
    }
  }
`;

export const QUERY_SLUG_CATEGORIES = gql`
{
    categories(){
        title,
        slug
    }
}`;

// export const QUERY_POST_BY_CATEGORY = gql`
// query GetPostsByCategory($slug: String!) {
//     posts(orderBy: updatedAt_DESC, where: { categories_some: { slug: $slug } }){
//         ${post}
//         categories(){${category}}
//     }
//   }
// `;
export const QUERY_POST_BY_ABOUT = gql`
 {
    posts(orderBy: updatedAt_DESC, first: 3, where: { categories_some: { slug: "about" } }){
        ${post}
        categories(){${category}}
    }
  }
`;
export const QUERY_POST_BY_INFORMATIONAL = gql`
{
    posts(orderBy: updatedAt_DESC,first: 3, where: { categories_some: { slug: "informational" } }){
        ${post}
        categories(){${category}}
    }
  }
`;
export const QUERY_POST_BY_MARKETING = gql`
{
    posts(orderBy: updatedAt_DESC,first: 3, where: { categories_some: { slug: "marketing" } }){
        ${post}
        categories(){${category}}
    }
  }
`;

export const QUERY_FEATURED_IMAGE = gql`
{
    featuredOTW(where: {id: ""}) {
        ${featuredImage}
      }
}
`;
