import React from 'react';

function VoteButtons (props) {
    return (
        <div className="block">
            <p>Votes:</p>
            <button className='button is-success' onClick={props.handleClick.bind(null, 'up')}>+</button>
            {props.votes}
            <button className='button is-danger' onClick={props.handleClick.bind(null, 'down')}>-</button>
        </div>
    )
}

VoteButtons.propTypes = {
    votes: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired
};


export default VoteButtons;