const redux = require("redux");

const reducerFunc = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "INCREMENTBY2") {
    return {
      counter: state.counter + 2,
    };
  }if (action.type === "DECREMENTBY2") {
    return {
      counter: state.counter - 2,
    };
  }
  if (action.type === "DECREMENT_COUNTER") {
    return {
      counter: state.counter - 1,
    };
  }
  return state
};

const store = redux.createStore(reducerFunc);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
counterSubscriber();
store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({type:"INCREMENTBY2"})
store.dispatch({ type: "DECREMENT_COUNTER" });
store.dispatch({ type: "DECREMENTBY2" });


