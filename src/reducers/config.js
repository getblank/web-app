const initialState = {
    data: {
        contacts: {
            props: {},
            label: 'Contacts'
        },
        clients: {
            props: {},
            label: 'КлейЭнтз'
        }
    },
    fetching: false,
    error: null,
};

export default function configReducer(state = initialState, action) {
    return state;
}