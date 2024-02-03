import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price,
        displayAssets,
    } = props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div className='card'>
            <div className='card-image' id={id}>
                <img
                    src={displayAssets.length && displayAssets[0].background}
                    alt={name}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right price'>{price.regularPrice} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };
