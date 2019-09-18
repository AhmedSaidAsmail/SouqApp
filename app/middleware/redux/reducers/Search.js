let initialState = {loading: false, result: null, error: null};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'attempt':
            return {...state, loading: true};
        case 'terminate':
            return {...state, loading: false};
        default:
            return state;
    }
}