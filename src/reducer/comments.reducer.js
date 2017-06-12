import * as types from '../actions/types';

const initialState = {
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
    //   case types.VOTE_COMMENT_REQUEST: {
    //   return Object.assign({}, prevState, {
    //     error: null
    //   });
    // }
    // case types.VOTE_COMMENT_SUCCESS: {
    //   const newState = Object.assign({}, prevState);
    //   const newComments = Object.assign({}, newState.comments);
    //   const newComment = Object.assign({}, newComments[action.comment_id]);
    //   if (action.vote === 'up') {
    //     newComment.votes++;
    //   }
    //   if (action.vote === 'down') {
    //     newComment.votes--;
    //   }
    //   newComments[action.comment_id] = newComment;
    //   newState.comments = newComments;
    //   newState.loading = false;
    //   return newState;
    // }
    // case types.VOTE_COMMENT_ERROR: {
    //   return Object.assign({}, prevState, {
    //     comments: [],
    //     loading: false,
    //     error: action.data
    //   });
    // }
    default:
      return prevState;
  }
}

export default commentsReducer;