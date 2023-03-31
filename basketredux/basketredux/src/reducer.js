import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log("you decreased amount!");
  }
  if (action.type === INCREASE) {
    console.log("you increased amount!");
  }
  if (action.type === REMOVE) {
    console.log("you remove amount!");
  }
  return state;
}

export default reducer;

//  1
// if(action.type === CLEAR_CART){
//     return{...state,cart:[]}
// }
// return state;
//or 2
// switch(action.type){
//     case CLEAR_CART:
//         return{...state,cart:[]};
//         default:
//             return state;
// }
