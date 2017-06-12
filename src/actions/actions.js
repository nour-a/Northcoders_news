import * as types from './types';
import axios from 'axios';

import { ROOT } from '../../config';

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

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

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

export function fetchCommentsRequest () {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function voteArticle (id,vote) {
  return (dispatch) => {
    dispatch(voteArticleRequest());
    axios
      .put(`${ROOT}/articles/${id}?vote=${vote}`)
      .then(res => {
        dispatch(voteArticleSuccess(res.data));
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

export function voteArticleError (error) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    error
  };
}

export function voteArticleSuccess (data) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data
  };
}


export function voteComment (comment_id,vote) {
  return (dispatch) => {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${comment_id}?vote=${vote}`)
      .then(res => {
        dispatch(voteCommentSuccess(comment_id, vote, res));
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

export function voteCommentSuccess (comment_id, vote, res) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    comment_id,
    vote,
    res
  };  
}

export function voteCommentError (error) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    data: error
  };
}