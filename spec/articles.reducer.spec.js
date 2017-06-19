import {expect} from 'chai';
import { articlesReducer } from '../src/reducer/articles.reducer';
import * as actions from '../src/actions/actions';

describe('articles.reducer', () => {
    const initialState = {
        articles: [ 
            {
            _id: '5915994f8e6a053693d1e0ac',
            title: 'What does Jose Mourinho\'s handwriting say about his personality?',
            body: 'Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United\'s manager was clearly impressed with the Austrian\'s performance.',
            created_by: 'tickle122',
            belongs_to: 'football',
            __v: 0,
            votes: 5,
            comments: 6
        }
        ],
        byId: {
            '5915994f8e6a053693d1e0ac': {
            _id: '5915994f8e6a053693d1e0ac',
            title: 'What does Jose Mourinho\'s handwriting say about his personality?',
            body: 'Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United\'s manager was clearly impressed with the Austrian\'s performance.',
            created_by: 'tickle122',
            belongs_to: 'football',
            __v: 0,
            votes: 5,
            comments: 6
            }
        },
        loading: false,
        error: null
    };
    it('returns state when not passed an action', () => {
            const newState = articlesReducer(initialState);
            expect(newState).to.eql(initialState);
        });
    describe('when passed action FETCH_ARTICLES_REQUEST', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to true', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState.loading).to.equal(true);
        });
    });
    describe('when passed action FETCH_ARTICLES_SUCCESS', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchArticlesSuccess(initialState.articles);
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to false', () => {
            const action = actions.fetchArticlesSuccess(initialState.articles);
            const newState = articlesReducer(initialState, action);
            expect(newState.loading).to.equal(false);
        });
    });
    describe('when passed action FETCH_ARTICLES_ERROR', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchArticlesError();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to false', () => {
            const action = actions.fetchArticlesSuccess(initialState.articles);
            const newState = articlesReducer(initialState, action);
            expect(newState.loading).to.equal(false);
        });
    });
    describe('when passed action VOTE_ARTICLE_SUCCESS', () => {
        it('does not mutate the initial state', () => {
            const action = actions.voteArticleSuccess({_id: '5915994f8e6a053693d1e0ac', vote: 'up'});
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('votes down the specific article', () => {
            const action = actions.voteArticleSuccess({_id: '5915994f8e6a053693d1e0ac', vote: 'down'});
            const newState = articlesReducer(initialState, action);
            expect(newState.byId['5915994f8e6a053693d1e0ac'].votes).to.equal(4);
        });
        it('votes up the specific article', () => {
            const action = actions.voteArticleSuccess({_id: '5915994f8e6a053693d1e0ac', vote: 'up'});
            const newState = articlesReducer(initialState, action);
            expect(newState.byId['5915994f8e6a053693d1e0ac'].votes).to.equal(6);
        });
    });
});