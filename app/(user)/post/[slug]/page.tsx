import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import {PortableText} from '@portabletext/react';

type Props = {
    params: {
        slug: string;
    };
};

async function Post({ params: { slug } }: Props) {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

    const post = await client.fetch(query, { slug });

    return (
        <div className="post-contain">
            <h3>{post.title}</h3>
            <h5>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </h5>
            <h5>By: {post.author.name}</h5>
            <img src={urlFor(post.mainImage).url()} alt="" />
            <div className="post-text">
                <PortableText value={post.body} /> 
            </div>
        </div>
    )
}
  
export default Post;