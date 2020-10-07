import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';


// 장바구니 이벤트 타입 설정(Store, Cart에서 쓰임)
// Context 란?
// React에서 데이터를 부모에서 자식에게 props를 통해 전달되지만,
// 여러 컴포넌트들에게 전달해야하는 props의 경우 과정이 번거로워진다.
// 이 때, context를 사용하면 트리 단계마다 명시적으로 props를 넘겨주지 않아도
// 다른 컴포넌트들이 데이터를 공유할 수 있다.

// useReducer은 useState의 대체 함수로 사용된다.
// useReducer를 사용하면 useState와 달리 여러 상태를 한 번에 처리할 수 있기 때문에 
// 관리해야할 상태가 많은 경우 useReducer를 선호한다.
// 또한 useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화할 수 있게 하는데,
// 이 이유는 콜백 대신 dispatch를 전달 할 수 있기 때문이다.

export const CartContext = createContext();

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = {cartItems: storage, ...sumItems(storage), checkout: false};

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', state);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    }

    // Context.Provider
    // Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 구독하는
    // 컴포넌트들에게 context의 변화를 알리는 역활을 한다.
    // Provider는 value prop를 받아서 이 값을 하위에 있는 컴포넌트에게 전달하며,
    // Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔 때마다 다시 렌더링 된다.
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;