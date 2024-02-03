import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
    const { id, name, price, quantity } = props;

    const { removeFromBasket, handleIncrementCount, handleDecrementCount } =
        useContext(ShopContext);

    return (
        <li className='collection-item'>
            <span>{name} x </span>
            <button
                className='button-basket-count'
                onClick={() => handleIncrementCount(id)}
            >
                +
            </button>
            <span>{quantity}</span>
            <button
                className='button-basket-count'
                onClick={() => handleDecrementCount(id, false)}
            >
                -
            </button>
            <span>= {price * quantity}</span>
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}

export { BasketItem };
