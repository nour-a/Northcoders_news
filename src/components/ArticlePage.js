import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComments from './ArticleComments';


class ArticlePage extends Component {
    componentDidMount () {

    }
    render () {
        // console.log('ArticlePage.render');
        if (this.props.loading) {
            return <p>Loading...</p>;
        }
        // console.log('Not loading!');
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
                    <div>
                        {/* <ArticleComments/>*/}
                    </div>
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

export default connect(mapStateToProps)(ArticlePage);