import React from 'react';

const TopCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{props.title}</h3>
            <h4 className='created_by'>Created by {props.createdby}</h4>
            <h4 className='commentCount'>{props.comments} Comments</h4>
            <h5 className='belongTo'>To {props.belongTo}</h5>
          </div>
        </div>
      </article>
    </div>
  )
}

export default TopCard;
