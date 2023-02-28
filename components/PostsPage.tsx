import {Post} from '../typings'

type Props = {
    posts: Post[];
};

function PostsPage({ posts }: Props) {
    return (
        <div>
            {posts.map((post) => (
                <div key={post._id}>
                    <h4>{post.title}</h4>
                </div>
            ))}
        </div>
    )
}

export default PostsPage;