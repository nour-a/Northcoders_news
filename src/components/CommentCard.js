import React from 'react';
import moment from 'moment';
////
import VoteButtons from './VoteButtons';
////

//import VoteCommentButtons from './VoteCommentButtons';



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
            {/*<div className="block">
            <button className='button is-success'>+</button>
            {props.votes}
            <button className='button is-danger'>-</button>
            </div>*/}
          </div>
        </div>
        {/*<div className="midcol">
                <div className="arrow comment" role="button"><i onClick={props.voteComment.bind(null, props.id, 'up')} className="arrow fa fa-arrow-circle-up block" /></div>
                <div className="score">{props.votes}</div>
                <div className="arrow comment" role="button"><i onClick={props.voteComment.bind(null, props.id, 'down')} className="arrow fa fa-arrow-circle-down block" /></div>
            </div>*/}
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