import * as types from '../actions/types';

const initialState = {
    byId: {},
    loading: false,
    error: null
};

function reducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_ARTICLES_REQUEST:
            return Object.assign({}, prevState, {
                loading: true,
                error: null
            });
        case types.FETCH_ARTICLES_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                byId: normaliseData(action.data)
            });
        case types.FETCH_ARTICLES_ERROR:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.error
            });
        case types.VOTE_ARTICLE_SUCCESS: {
            const articleId = action.data._id;
            ////
            const vote = action.data.vote === 'up' ? 1 : -1;
            ////
            return Object.assign({}, prevState, {
                byId: Object.assign({}, prevState.byId, {
                    [articleId]: Object.assign({}, prevState.byId[articleId], {
                        //votes: action.data.votes
                        votes: prevState.byId[articleId].votes + vote
                    })
                })
            });
        }

        default:
            return prevState;
    }
}

function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item._id] = item;
        return acc;
    }, {});
}

export function getTopArticles (state, num) {
    return Object.keys(state.articles.byId).reduce(function (acc, id) {
        return acc.concat(state.articles.byId[id]);
    }, []).sort(function (a, b) {
        return b.votes - a.votes;
    }).slice(0, num);
}

export default reducer;
