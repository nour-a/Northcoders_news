import * as types from '../actions/types';

const initialState = {
  //byId:{},
  comments: [],
  loading: false,
  error: null
};

export function commentsReducer (prevState = initialState, action) {
  if (typeof action === 'undefined') return prevState;
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_COMMENTS_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        comments: action.data
      });
    case types.FETCH_COMMENTS_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    case types.VOTE_COMMENT_SUCCESS: {
          const commentId = action.data._id;
          ////
          const vote = action.data.vote === 'up' ? 1 : -1;
          const newState = Object.assign({}, prevState);
          newState.comments = newState.comments.map((comment) => {
            if (comment._id === commentId) {
              return Object.assign({}, comment, { votes: comment.votes + vote });
            }
            return comment;
          });
          return newState;
          ////
      }
      case types.ADD_COMMENT_SUCCESS: {
          const newState = Object.assign({}, prevState);
          newState.comments = [action.data].concat(newState.comments);
          return newState;
          ////
      }
 
    default:
      return prevState;
  }
}

export default commentsReducer;