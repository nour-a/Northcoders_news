import * as types from './types';
import axios from 'axios';
import { ROOT } from '../../config';

/////fetchArticles functions////////////
export function fetchArticles (topic) {
  let url = `${ROOT}`;
  if (topic) {
    url += `/topics/${topic}/articles`;
  } else {
    url += '/articles';
  }
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    axios
      .get(url)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
         dispatch(fetchArticlesError(err));
      });
  };
}

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}


export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles
  };
}

export function fetchArticlesError (err) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    err: err
  };
}

/////voteArticle functions ////////////
export function voteArticle (id,vote) {
  return (dispatch) => {
    dispatch(voteArticleRequest());
    axios
      .put(`${ROOT}/articles/${id}?vote=${vote}`)
      .then(res => {
        dispatch(voteArticleSuccess({_id: id, vote}));
      })
      .catch(error => {
         dispatch(voteArticleError(error.message));
      });
  };
}

export function voteArticleRequest () {
  return {
    type: types.VOTE_ARTICLE_REQUEST,
    
  };
}

export function voteArticleSuccess (data) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data:data
  };
}

export function voteArticleError (error) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    error:error
  };
}

////fetchComments functions ///////////////
export function fetchComments (articleId) {
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    axios
      .get(`${ROOT}/articles/${articleId}/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data.comments));
      })
      .catch(err => {
         dispatch(fetchCommentsError(err));
      });
  };
}

export function fetchCommentsRequest () {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function fetchCommentsSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    data: comments
  };
}

export function fetchCommentsError (err) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    err: err
  };
}

/////voteComment functions/////////////
export function voteComment (id,vote) {
  return (dispatch) => {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${id}?vote=${vote}`)
      .then(res => {
        dispatch(voteCommentSuccess({_id: id, vote}));
      })
      .catch(error => {
         dispatch(voteCommentError(error.message));
      });
  };
}

export function voteCommentRequest () {
  return {
    type: types.VOTE_COMMENT_REQUEST
    };
}

export function voteCommentSuccess (data) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    data:data
  };  
}

export function voteCommentError (err) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    err: err
  };
}

////addComment functions//////////////////
export function addComment (id, comment) {
  return (dispatch) => {
    dispatch(addCommentRequest());
    axios
      .post(`${ROOT}/articles/${id}/comments`, {
        comment: comment
      })
      .then(res => {
        dispatch(addCommentSuccess(res.data.comment));
      })
      .catch(error => {
         dispatch(addCommentError(error.message));
      });
  };
}

export function addCommentRequest () {
  return {
    type: types.ADD_COMMENT_REQUEST,    
  };
}

export function addCommentSuccess (data) {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    data: data
  };
}

export function addCommentError (err) {
  return {
    type: types.ADD_COMMENT_ERROR,
    err: err
  };
}

////deleteComment functions/////////
export function deleteComment (id) {
  return (dispatch) => {
    dispatch(deleteCommentRequest());
    axios
      .put(`${ROOT}/comments/${id}`)
      .then(res => {
        console.log(res);
        dispatch(deleteCommentSuccess({_id: id}));
      })
      .catch(error => {
         dispatch(deleteCommentError(error.message));
      });
  };
}

export function deleteCommentRequest () {
  return {
    type: types.DELETE_COMMENT_REQUEST,
  };
}

export function deleteCommentSuccess (data) {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    data: data
  };
}

export function deleteCommentError (err) {
  return {
    type: types.DELETE_COMMENT_ERROR,
    err: err
  };
}