import {Post} from '../typings';
import urlFor from "../lib/urlFor";
import { PortableText } from '@portabletext/react';

type Props = {
    posts: Post[];
};

function PostsPage({ posts }: Props) {
    return (
        <div className="body-contain">
            {posts.map((post) => (
                <div key={post._id} className="entry-contain">
                    <img src={urlFor(post.mainImage).url()} alt="" />
                    <div className="entry-text">
                        <h4>{post.title}</h4>
                        <div className="shorten-text">
                            <PortableText value={post.body} />
                        </div>
                        <a href="#">Read Post</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostsPage;