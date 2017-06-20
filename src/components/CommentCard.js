import React from 'react';
import moment from 'moment';
import VoteButtons from './VoteButtons';

const CommentCard = function (props) {
  console.log(props);
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
        </div>
        <div className='media-content'>
          <div className='content'>
            <p className='comment'> {props.body}</p>
            <p>By {props.created_by} | Created: {moment(props.created_at).fromNow()}</p>
          </div>
        </div>
        <div className='media-left'>
          <VoteButtons
            id={props._id}
            votes={props.votes}
            handleClick={props.voteComment}
          />
        </div>
      </article>
    </div>
  )
}

export default CommentCard;