import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

// This is a variable, it has the objects for the posts. Will be fetched in the Post Query.
const featuredImage = `
    image {
      url
    }

`;

const post = `
    featuredPost
    featuredImage {
      url
    }
    content {
      html
    }
    content {
      raw
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

//-----------SORTED POSTS ⬇️
export const QUERY_POST_BY_CATEGORY = gql`
query GetPostsByCategory($slug: String!) {
    posts(orderBy: updatedAt_DESC, where: { categories_some: { slug: $slug } }){
        ${post}
        categories(){${category}}
    }
  }
`;

export const QUERY_POSTS = gql`
  {
    posts(orderBy: updatedAt_DESC, first: 4 ){
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
    posts(orderBy: updatedAt_DESC,first: 2, where: { categories_some: { slug: "informational" } }){
        ${post}
        categories(){${category}}
    }
  }
`;

export const QUERY_POST_BY_MARKETING = gql`
{
    posts(orderBy: updatedAt_DESC,first: 4, where: { categories_some: { slug: "marketing" } }){
        ${post}
        categories(){${category}}
    }
  }
`;
export const QUERY_POST_BY_SALES = gql`
{
    posts(orderBy: updatedAt_DESC,first: 4, where: { categories_some: { slug: "sales" } }){
        ${post}
        categories(){${category}}
    }
  }
`;
export const QUERY_POST_BY_FEATOFDAWEEK = gql`
{
    posts(orderBy: updatedAt_DESC,first: 1, where: { categories_some: { slug: "featured-posts" } }){
        ${post}
        categories(){${category}}
    }
  }
`;
export const QUERY_POST_BY_POPULARITY = gql`
{
    posts(orderBy: updatedAt_DESC,first: 2, where: { categories_some: { slug: "popular" } }){
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
export const QUERY_POST_BY_FEATURED = gql`
{
  posts(orderBy: updatedAt_DESC,first: 3){
      ${post}
      featuredPost
  }
}
`;
export const QUERY_POST = gql`
{
  posts(orderBy: updatedAt_DESC,first: 3){
      ${post}
      featuredPost
  }
}
`;

export const QUERY_ALL_CATEGORIES = gql`
{categories(orderBy: updatedAt_DESC){
  ${category}
}}
`;

//--------------SORTED QUERIES ⬆️

//Post
export const QUERY_SELECTED_POST = gql`
query GetOnePost($slug: String!){
  posts(where: {slug: $slug}){
    ${post}
    categories(){
      ${category}
    }
    comments(orderBy: updatedAt_DESC){
      ${comment}
    }
  }
}
`;

export const QUERY_ALL_POSTS = gql`
query GetPosts($limit: Int!, $skip: Int!){
  posts(orderBy: updatedAt_DESC,first: $limit, skip: $skip){
      ${post}
      categories(){
        ${category}
      }
  }
  countConnection: postsConnection(stage: PUBLISHED){
    aggregate{
      count
    }
  }
}
`;
