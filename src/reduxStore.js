
import { createStore, ReactReduxContext } from "react-redux";
const newBooking = (name ,amount) => {
  return {
    type: "new-booking",
    payload: {
      name,
      amount,
    },
  };
};
const cancelBooking = (name,refundAmount ) => {
  return {
    type: "cancel-booking",
    payload: {
      name,
      refundAmount,
    },
  };
};

const reservationHistory = (state=[], action) => {
  if (action.type === "new-booking") {
    return [...state, action.payload]};
  
  if (action.type === "cancel-booking") {
    return state.filter((record)=>{
        return record = !action.payload.name;
    });
  }
  return state;
};

const cancellationHistory = (state=[], action) => { 
    if (action.type === "cancel-booking") {
      return [...state, action.payload]
      }
    return state;
  };
  const accounting = (state=100, action) => { 
    if (action.type === "new-booking") {
      return state + action.amount;
      }
      if (action.type === "cancel-booking") {
        return state - action.type.refundAmount;
        }
    return state;
  };


const {createStore, combineReducers} = ReactReduxContext;

const railwatCentralStore = combineReducers({
  accounting,
  reservationHistory,
  cancellationHistory,
})

const store = createStore(railwatCentralStore);
const action = newBooking('rawat',100);
store.dispatch(action);