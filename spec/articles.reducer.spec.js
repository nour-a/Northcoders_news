import {expect} from 'chai';
import reducer from '../src/reducer/articles.reducer';
import {voteArticleSuccess} from '../src/actions/actions';

describe('reducer:articles', () => {
    it('exists', () => {
        expect(reducer).to.be.a('function');
    });
    describe('actions:VOTE_ARTICLE', () => {
        it('handles VOTE_ARTICLE_SUCCESS correclty', () => {
            const initialState = {
                byId: {
                    "1": {
                        votes: 40
                    },
                    "2": {
                        votes: 3
                    }
                }
            }
            const action = voteArticleSuccess({
                _id: "1",
                votes: 41
            });
            const expectedState = {
                byId: {
                    "1": {
                        votes: 41
                    },
                    "2": {
                        votes: 3
                    }
                }
            };
            expect(reducer(initialState, action)).to.eql(expectedState);
        })
    })
})