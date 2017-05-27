import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import TopCard from './TopCard';

const TopList = React.createClass({

    componentWillMount () {
        this.props.fetchArticles();
    },
    render () {
        return (
            <div id='Top'>
                {this.props.articles.sort(function (a, b) {
                    return b.votes - a.votes;
                }).map(function (article, i) {
                    return <TopCard title={article.title} votes={article.votes}/>;
                })}
            </div>
        );
    }

});


function mapStateToProps (state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles(props.params.topic));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopList);
