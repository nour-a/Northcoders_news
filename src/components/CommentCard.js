import React from 'react';

const CommentCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
        </div>
        <div className='media-content'>
          <div className='content'>
            <p className='comment'> {props.body}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default CommentCard;
