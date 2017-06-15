import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ArticleComments from './ArticleComments';


class ArticlePage extends Component {
    constructor(props) {
        super(props);
        ////
        this.state = {};
        this.handleCommentForm = this.handleCommentForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
        ////
    }
    componentDidMount () {
        this.props.fetchArticles(this.props.params.topic);
    }
    ////
    handleCommentForm (e) {
        this.setState({
            comment: e.target.value
        });
    }
    handleClick () {
        this.props.addComment(this.props.params.articleId, this.state.comment);
        setTimeout(() => { window.location.reload(); }, 1000);
    }
    ////
    render () {
        // if (this.props.loading) {
        //     return <p>Loading...</p>;
        // }
        return (
            <div className="container">
                <div className="notification">
                    <h1 className="article-header">{this.props.article.title}</h1>
                    <div className="article-body">
                        <p>{this.props.article.body}</p>
                    </div>
                    <div className="article-details">
                        <p>Category - {this.props.article.belongs_to}</p>
                        <p>Article Comments - {this.props.article.comments}</p>
                    </div>
                </div>
                {/*//*/}
                <h4 className="text-danger comments-header">Comments</h4>
                            <div className="input-group add-comment">
                                <input onChange={this.handleCommentForm} type="text" className="form-control" placeholder="Add your comment..." />
                                <span className="input-group-btn">
                                    <button onClick={this.handleClick} className="btn btn-danger" type="button">Add comment</button>
                                </span>
                            </div>
                            {/*//*/}
                <div className="panel-footer">
                     <ArticleComments articleId={this.props.params.articleId} comments={this.props.comments}/>
                     {/*voteComment={this.props.voteComment}*/}
                    </div>
            </div>
        );
    }
}

function mapStateToProps (state, props) {
    return {
        article: state.articles.byId[props.params.articleId],
        loading: (
            state.articles.loading
        ),
        //comments: state.comments
    };
}
function mapDispatchToProps (dispatch) {
    return {
        fetchArticles: (topic) => {
            dispatch(actions.fetchArticles(topic));
        },
        addComment: (id, comment) => {
            dispatch(actions.addComment(id, comment));
        },
        /*voteComment: (id, vote) => {
      dispatch(actions.voteComment(id, vote));
    }*/
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticlePage);
