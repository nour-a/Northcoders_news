import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


import ArticleComments from './ArticleComments';


class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleCommentForm = this.handleCommentForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchArticles(this.props.params.topic);
    }
    handleCommentForm(e) {
        this.setState({
            comment: e.target.value
        });
    }
    handleClick() {
        this.props.addComment(this.props.params.articleId, this.state.comment);
    }
    render() {
        return (
            <div className="container">
                <div className="notification">
                    <h1 className="article-header">{this.props.article.title}</h1>
                    <div className="article-body">
                        <p>{this.props.article.body}</p>
                    </div>

                    <div className="article-details">
                        <span>Category: {this.props.article.belongs_to}</span>
                        <span> | Comments: {this.props.article.comments}</span>
                    </div>
                </div>
                <div className="input-group add-comment">
                    <input className="input-txt" onChange={this.handleCommentForm} type="text" placeholder="Add your comment..." />
                    <span className="input-group-btn">
                        <button  className="button-blue" onClick={this.handleClick}  type="button">Add comment</button>
                    </span>
                </div>
                

                <div className="panel-footer">
                    <ArticleComments articleId={this.props.params.articleId} comments={this.props.comments} />
                </div>

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        article: state.articles.byId[props.params.articleId],
        loading: (
            state.articles.loading
        ),
        comments: state.comments
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchArticles: (topic) => {
            dispatch(actions.fetchArticles(topic));
        },
        addComment: (id, comment) => {
            dispatch(actions.addComment(id, comment));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
