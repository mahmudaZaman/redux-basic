import * as actionTypes from '../actions';

const initialState = {
    results:[]
}

const reducer = (state= initialState, action) => {
    console.log('result reducer', action);
    switch( action.type ){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        // case 'STORE_RESULT':
        //     return {
        //         ...state,
        //         results: state.results.concat({value: state.counter})
        //     }
        }
    return state;
}

export default reducer;