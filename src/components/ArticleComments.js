import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CommentCard from './CommentCard';

const ArticleComments = React.createClass ({
    componentWillMount () {
        this.props.fetchComments();
    },
    render () {
        return (
            <div className="comments-container">
            {this.props.comments.map( function (comment, i) {
                return <CommentCard key={i} body={comment.body}/>;
                /// to be continued
            })}
            </div>
        );
    }
}); 


function mapStateToProps (state) {
    return {
        comments: state.comments,
    };
}
function mapDispatchToProps (dispatch,props) {
    // console.log(props);
    return {
        fetchComments: () => {
            dispatch(actions.fetchComments(props.article_id));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);