import { expect } from 'chai';
import { commentsReducer } from '../src/reducer/comments.reducer';
import * as actions from '../src/actions/actions';

describe('comments.reducer', () => {
    const initialState = {
        comments: [
            {
                _id: '591599508e6a053693d1e0d0',
                body: 'Zi ajli idewap roh setfaj los sa gihujfi nebi deraleza wuakoos me. Igadi fovupba dob nok pojfogvew wojazar zofudom mufaforuk woze lif nucka coborejo.',
                belongs_to: '5915994f8e6a053693d1e0ac',
                __v: 0,
                created_by: 'tickle122',
                votes: 10,
                created_at: 1494046948000
            }
        ],
        loading: false,
        error: null
    };
    it('returns state when not passed an action', () => {
        const newState = commentsReducer(initialState);
        expect(newState).to.eql(initialState);
    });
    describe('when passed action FETCH_COMMENTS_REQUEST', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchCommentsRequest();
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to true', () => {
            const action = actions.fetchCommentsRequest();
            const newState = commentsReducer(initialState, action);
            expect(newState.loading).to.equal(true);
        });
    });
    describe('when passed action FETCH_COMMENTS_SUCCESS', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchCommentsSuccess(initialState.comments);
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to false', () => {
            const action = actions.fetchCommentsSuccess(initialState.comments);
            const newState = commentsReducer(initialState, action);
            expect(newState.loading).to.equal(false);
        });
    });
    describe('when passed action FETCH_COMMENTS_ERROR', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchCommentsError(initialState.comments);
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to false', () => {
            const action = actions.fetchCommentsError(initialState.comments);
            const newState = commentsReducer(initialState, action);
            expect(newState.loading).to.equal(false);
        });
    });
    describe('when passed action VOTE_COMMENT_SUCCESS', () => {
        it('does not mutate the initial state', () => {
            const action = actions.voteCommentSuccess({ _id: '591599508e6a053693d1e0d0', vote: 'up' });
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to false', () => {
            const action = actions.voteCommentSuccess({ _id: '591599508e6a053693d1e0d0', vote: 'up' });
            const newState = commentsReducer(initialState, action);
            expect(newState.loading).to.equal(false);
        });
        it('votes down the specific comment', () => {
            const action = actions.voteCommentSuccess({ _id: '591599508e6a053693d1e0d0', vote: 'down' });
            const newState = commentsReducer(initialState, action);
            expect(newState.comments[0].votes).to.equal(9);
        });
        it('votes up the specific comment', () => {
            const action = actions.voteCommentSuccess({ _id: '591599508e6a053693d1e0d0', vote: 'up' });
            const newState = commentsReducer(initialState, action);
            expect(newState.comments[0].votes).to.equal(11);
        });
    });
});