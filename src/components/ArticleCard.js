import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';
import PropTypes from 'prop-types';


const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <VoteButtons
            id={props._id}
            votes={props.votes}
            handleClick={props.voteArticle}
          />
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/${props.belongs_to}/${props._id}`} className='title is-3'>{props.title}</Link>
            <h4 className='created_by'>Created by {props.created_by}</h4>
            <h4 className='commentCount'>{props.comments} Comments</h4>
            <h5 className='belongTo'>Category - {props.belongs_to}</h5>
          </div>
        </div>
      </article>
    </div>
  );
}




export default ArticleCard;
