import { legacy_createStore as createStore } from 'redux'


const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


const initialState = { counter: 0, showCounter: true };


const counterReducer = (state = initialState, action) => {

    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }



    if (action.type === "increaseby5") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }


    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }


    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }



    return state;
}




const store = createStore(counterReducer, enhancer());

//connect my react app to that store
//provide this store to the react app
export default store;







/* function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount
      }
    case "reset":
      return {
        ...state,
        counter: 0
      }
    case "toggleCounter":
      return {
        ...state,
        showCounter: !state.showCounter
      }
    default: return state
  }
}
*/