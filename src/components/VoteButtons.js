import React from 'react';

function VoteButtons(props) {
    const { handleClick, id } = props;
    return (
        <div className="vote-but">
        <div className="block">
            <button className='button is-success' onClick={handleClick.bind(null, id, 'up')}>+</button>
            <span className="votes-no">{props.votes}</span>
            <button className='button is-danger' onClick={handleClick.bind(null, id, 'down')}>-</button>
        </div>
        </div>
    )
}

VoteButtons.propTypes = {
    votes: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired
};


export default VoteButtons;



