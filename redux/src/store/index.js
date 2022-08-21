import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';



//multiple reducer
const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer
  }
});


export default store










//______________________________________________________________________________

// //                       Create a Redux Store
// import { configureStore } from '@reduxjs/toolkit';

// //                     Create a Redux State Slice

// import { createSlice } from '@reduxjs/toolkit';

// const initialCounterState = {
//   counter: 0,
//   showCounter: true
// };


// // Now we wanna register this with our store.
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       //redux toolkit internally uses another package called immer
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });

// //______________________________________________________________


// const initialAuthState = {
//   isAuthenticated: false
// };



// // Now we wanna register this with our store.
// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   }
// });




// //              Create a Redux Store
// // reducer: counterSlice.reducer he el jemle bt5alina net7akam bel 4 reducers

// //multiple reducer
// const store = configureStore({
//   reducer: {
//     //key names : reducers
//     // And these individual reducers here will then automatically be merged together
//     // into one main reducer, which is exposed to this store.
//     counter: counterSlice.reducer,
//     auth: authSlice.reducer
//   }
// });


// // single reducer
// //export const store = configureStore({ reducer: counterSlice.reducer });

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// export default store



//___________________________________________________________________________________
//                        WITHOUT REACT TOOLKIT

// import { legacy_createStore as createStore } from 'redux'


// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


// const initialState = { counter: 0, showCounter: true };


// const counterReducer = (state = initialState, action) => {

//     if (action.type === "increment") {
//         /*you should never super important never mutate the state, the existing state.
//         You should never change the existing state. Instead, always override it
//         by returning a brand new state object.*/
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }



//     if (action.type === "increaseby5") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }


//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }


//     if (action.type === "toggle") {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }



//     return state;
// }




// const store = createStore(counterReducer, enhancer());

// //connect my react app to that store
// //provide this store to the react app
// export default store;








//____________________________________________________________________________________________
                        //  ANOTHER WAY TO WRITING THE REDUCER FUNCTION

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