import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ArticleComments from './ArticleComments';

const ArticleBody = React.createClass({
    componentWillMount() {
        this.props.fetchArticles();
    },
    render() {
        const article = this.props.articles.find(function (article) {
            return article._id === this.props.params._id;
        }.bind(this));

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <h4>Votes {article && article.votes}</h4>
                            <h4>{article && article.title}</h4>
                            <h4>{article && article.comments} Comments</h4>
                            <p>{article && article.body}</p>
                            <h5>{article && article.created_by}</h5>
                            <ArticleComments article_id={article._id} />
                        </div>
                    </div>
                </article>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        articles: state.articles,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchArticles: () => {
            dispatch(actions.fetchArticles());
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody);