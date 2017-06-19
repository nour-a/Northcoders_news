import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { getTopArticles } from '../reducer/articles.reducer'
import ArticleList from './ArticleList';

const FrontPage = React.createClass({

  componentDidMount() {
    this.props.fetchArticles(this.props.params.topic);
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.topic !== this.props.params.topic) {
      this.props.fetchArticles(nextProps.params.topic);
    }
  },
  render() {
    return (
      <div id='FrontPage'>
        <ArticleList
          articles={this.props.articles}
          voteArticle={this.props.voteArticle} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    articles: getTopArticles(state, 10)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: (topic) => {
      dispatch(actions.fetchArticles(topic));
    },
    voteArticle: (id, vote) => {
      dispatch(actions.voteArticle(id, vote));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
