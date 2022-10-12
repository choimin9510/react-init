import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { userActions } from './store/user';

function App() {
    const dispatch = useDispatch();
    const { id: userId, name:userName } = useSelector((state) => ({id: state.user.id, name: state.user.name}), shallowEqual);
    const orderId = useSelector((state) => state.order.id);

    return (
        <div>
        	<h1>Hello React</h1>
            <div>{userId} - {userName}</div>
            <div>{orderId}</div>
            <input type="button" onClick={() => dispatch(userActions.setName('조혜'))} value="이름 변경" />
        </div>
    );
}

export default App;