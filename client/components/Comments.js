import React from 'react';

const Comments = React.createClass({
    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    },

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}

                <form className="comment-form" ref="commentForm">
                    <input ref="author" type="text" placeholder="author" />
                    <input ref="comment" type="text" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
});

export default Comments;
