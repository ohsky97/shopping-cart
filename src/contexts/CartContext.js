import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';


// 장바구니 이벤트 타입 설정(Store, Cart에서 쓰임)
// Context 란?
// React에서 데이터를 부모에서 자식에게 props를 통해 전달되지만,
// 여러 컴포넌트들에게 전달해야하는 props의 경우 과정이 번거로워진다.
// 이 때, context를 사용하면 트리 단계마다 명시적으로 props를 넘겨주지 않아도
// 다른 컴포넌트들이 데이터를 공유할 수 있다.
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

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;