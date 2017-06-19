import React from 'react';
import PropTypes from 'prop-types';

import ArticleCard from './ArticleCard';

function ArticleList(props) {
    return (
        <div id="ArticleList">
            {props.articles.map(function (article, i) {
                return <ArticleCard
                    key={i}
                    {...article}
                    voteArticle={props.voteArticle} />;
            })}
        </div>
    );
}

ArticleList.propTypes = {
    articles: React.PropTypes.array.isRequired,
    voteArticle: PropTypes.func.isRequired
};

export default ArticleList;