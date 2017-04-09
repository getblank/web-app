const initialState = {
    items: []
};

export default function historyReducer(state = initialState, action) {
    switch (action.type) {
        case 'PUSH_STATE': {
            return { items: [...state.items, action.url] }
        }
    }

    return state;
}