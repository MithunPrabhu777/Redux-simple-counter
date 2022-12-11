import { DECREMENT, INCREMENT, RANDOM, RESET } from "./action-types";

const initialState = {
    count: 0
}

export const reducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case RESET:
            return {
                count: 0
            }

        case RANDOM:
            return {
                ...state,
                count: Math.random(state.count).toFixed(2) * 100
            }

        default: return state;
    }
}