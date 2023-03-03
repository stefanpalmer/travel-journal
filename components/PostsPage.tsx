import {Post} from '../typings';
import urlFor from "../lib/urlFor";

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
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quidem commodi rem. Magnam similique delectus, vero reiciendis assumenda molestias doloribus vitae amet corporis, deleniti hic quia sit at quisquam repudiandae.
                        </div>
                        <a href="#">Read Post</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostsPage;