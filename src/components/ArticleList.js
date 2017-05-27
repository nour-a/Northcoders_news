import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleList (props) {
    return (
        <div id="ArticleList">
            {props.articles.map(function (article, i) {
                return <ArticleCard 
                    key={i} 
                    {...article} 
                    voteArticle={props.voteArticle.bind(null, article._id)} 
                />;
            })}
        </div>
    );
}

ArticleList.propTypes = {
    articles: React.PropTypes.array.isRequired
};

export default ArticleList;