import React from 'React';
import { Link } from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render() {
        const {post, index, comments} = this.props;

        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img className="grid-photo"
                            src={post.display_src}
                            alt={post.caption} />
                    </Link>

                    <CSSTransitionGroup transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span className="likes-heart" key="{post.likes}">
                            {post.likes}
                        </span>
                    </CSSTransitionGroup>
                </div>

                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );
    }
});

export default Photo;