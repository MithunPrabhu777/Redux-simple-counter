import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction,resetAction,randomAction } from '../redux/action';

const Index = () => {

    const value = useSelector(state => state.ourState.count);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(incrementAction())}>INCREMENT</button>
            <button onClick={() => dispatch(decrementAction())} disabled={value === 0}>DECREMENT</button>
            <button onClick={() => dispatch(resetAction())} disabled={value === 0}>RESET</button>
            <button onClick={() => dispatch(randomAction())}>RANDOM</button>
            {value}
        </div>
    )
}

export default Index