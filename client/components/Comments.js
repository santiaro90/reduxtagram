import React from 'react';

const Comments = React.createClass({
    handleSubmit(event) {
        event.preventDefault();

        const postId = this.props.params.postId;

        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },

    renderComment(comment, index) {
        const postId = this.props.params.postId;

        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={this.props.removeComment.bind(null, postId, index)}
                        className="remove-comment">
                        &times;
                    </button>
                </p>
            </div>
        );
    },

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}

                <form onSubmit={this.handleSubmit} className="comment-form" ref="commentForm">
                    <input ref="author" type="text" placeholder="author" />
                    <input ref="comment" type="text" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
});

export default Comments;
