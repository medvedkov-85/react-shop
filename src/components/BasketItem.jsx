function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        handleChangeCount = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            <span>{name} x </span>
            <button
                className='button-basket-count'
                onClick={() => handleChangeCount(id)}
            >
                +
            </button>
            <span>{quantity}</span>
            <button
                className='button-basket-count'
                onClick={() => handleChangeCount(id, false)}
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
