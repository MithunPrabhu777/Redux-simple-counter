import { INCREMENT, DECREMENT,RESET, RANDOM } from "./action-types";

export const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

export const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

export const resetAction = () => {
    return {
        type: RESET
    }
}

export const randomAction = () => {
    return {
        type: RANDOM
    }
}