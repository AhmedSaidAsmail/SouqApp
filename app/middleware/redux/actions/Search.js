const handleResponse = (dispatch, keyword, terminate) => {
    if (terminate) {
        dispatch({type: 'terminate'});
    }
}
export const search = ({keyword, terminate = false}) => {
    return (dispatch) => {
        dispatch({type: 'attempt', loading: true});
        handleResponse(dispatch, keyword, terminate);
    }
}
