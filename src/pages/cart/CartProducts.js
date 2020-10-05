import React, {useContext} from 'react';
import {CartContext} from '../../contexts/CartContext';
import CartItem from './CartItem';

// 장바구니 리스트 출력
const CartProducts = () => {
    const {cartItems} =useContext(CartContext);

    return (
        <div>
            <div className="card card-body border-0">
                {
                    cartItems.map(product => <CartItem key={product.id} product={product} />)
                }
            </div>
        </div>
    );
}

export default CartProducts;