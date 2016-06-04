function postComments(state = [], action) {
    switch (action.type) {
    case 'ADD_COMMENT':
        return [...state, {
            user: action.author,
            text: action.comment
        }];
    case 'REMOVE_COMMENT':
        const index = action.index;

        return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
    default:
        return state;
    }
}

export default function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state;
}
