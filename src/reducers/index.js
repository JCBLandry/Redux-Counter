import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      const { count } = action.payload
      const newCount = state[count]
      return {
        ...state,
        [count]: newCount,
      }

    case DECREMENT:
    // Fill in the body of this case
    const { count2 } = action.payload
    const newCount2 = state[count2]
    return {
      ...state,
      [count2]: newCount2,
    }
    default:
      return state;
  }
};
