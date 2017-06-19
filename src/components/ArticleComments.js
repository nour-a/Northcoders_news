import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CommentCard from './CommentCard';

const ArticleComments = React.createClass({
    componentWillMount() {
        this.props.fetchComments(this.props.articleId);
    },
    render() {
        return (
            <div className="comments-container">
                {this.props.comments.map(function (comment, i) {
                    return <CommentCard
                        key={i}
                        {...comment}
                        voteComment={this.props.voteComment} />;
                }.bind(this))}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        comments: state.comments.comments,
    };
}
function mapDispatchToProps(dispatch, props) {
    return {
        fetchComments: (id) => {
            dispatch(actions.fetchComments(id));
        },
        voteComment: (id, vote) => {
            dispatch(actions.voteComment(id, vote));
        },
        deleteComment: (id) => {
            dispatch(actions.deleteComment(id));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
