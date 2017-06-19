import React from 'react';

function VoteButtons(props) {
    const { handleClick, id } = props;
    return (
        <div className="block">
            <p>Votes:</p>
            <button className='button is-success' onClick={handleClick.bind(null, id, 'up')}>+</button>
            {props.votes}
            <button className='button is-danger' onClick={handleClick.bind(null, id, 'down')}>-</button>
        </div>
    )
}

VoteButtons.propTypes = {
    votes: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired
};


export default VoteButtons;