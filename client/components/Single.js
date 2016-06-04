import React from 'react';

import Comments from './Comments';
import Photo from './Photo';

const Single = React.createClass({
    render() {
        const postId = this.props.params.postId;

        const index = this.props.posts.findIndex(post => {
            return post.code === postId;
        });

        const post = this.props.posts[index];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        );
    }
});

export default Single;
