import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PostsPage from "../../components/PostsPage";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;


export default async function Home() {
  const posts = await client.fetch(query);
  return <PostsPage posts={posts} />
}
