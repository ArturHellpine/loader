import React, {FC} from 'react';
import {IPost} from "./types/types";

interface PostListProps {
    posts: IPost[]
}

const PostList: FC<PostListProps> = ({posts}) => {
    return (
        <div>
            <h1>Список постів на сторінці: <span>{posts.length}</span></h1>
            {posts.map(post =>
                <div key={post.id} style={{marginTop: 20, border: '1px solid teal', padding: 10}}>
                    <strong>{post.id}.</strong> {post.title}
                    <div>
                        {post.body}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostList;