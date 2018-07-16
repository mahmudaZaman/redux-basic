const redux = require("redux");
const initialState = {
    name: "shuchi",
    counter: 0
};

//Reducer
const rootReducer = (state = initialState, action) => {
    if( action.type == "PLUS_PRESSED" ){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    if( action.type == "MINUS_PRESSED" ){
        return{
            ...state,
            counter: state.counter - action.value
        }
    }
    return state;
}

//Store
const createStore = redux.createStore;
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log("subscription", store.getState());
});

//Dispatching Action
store.dispatch({ type: "PLUS_PRESSED", value:10});
store.dispatch({ type: "MINUS_PRESSED", value:5 });
console.log(store.getState());
