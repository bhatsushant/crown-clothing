import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => {
        console.log(isCartOpen);
        return setIsCartOpen(!isCartOpen);
    };
    return (
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon' onClick={toggleIsCartOpen} /> 
                <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;