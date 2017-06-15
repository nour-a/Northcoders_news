import React from 'react';

function VoteCommentButtons (props) {
    return (
        <div className="block">
            <p>Votes:</p>
            <button className='button is-success' onClick={props.handleCommentClick.bind(null, 'up')}>+</button>
            {props.votes}
            <button className='button is-danger' onClick={props.handleCommentClick.bind(null, 'down')}>-</button>
        </div>
    )
}

VoteCommentButtons.propTypes = {
    votes: React.PropTypes.number.isRequired,
    handleCommentClick: React.PropTypes.func.isRequired
};


export default VoteCommentButtons;