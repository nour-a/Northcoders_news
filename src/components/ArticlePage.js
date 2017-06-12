import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComments from './ArticleComments';


class ArticlePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchArticles(this.props.params.topic);  

    }
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
                <div className="panel-footer">
                     <ArticleComments articleId={this.props.params.articleId} comments={this.props.comments} />
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
        )
    };
}
function mapDispatchToProps (dispatch) {
    return {
        fetchArticles: (topic) => {
            dispatch(actions.fetchArticles(topic));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticlePage);
