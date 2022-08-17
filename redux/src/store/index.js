import { legacy_createStore as createStore } from 'redux'



const counterReducer = (state = { counter: 0 }, action) => {

    if (action.type === "increment") {
        return { counter: state.counter + 1 }
    }
    if (action.type === "decrement") {
        return { counter: state.counter - 1 }
    }
    return state;
}


const store = createStore(counterReducer);

//connect my react app to that store
//provide this store to the react app
export default store;


