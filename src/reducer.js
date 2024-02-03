export function reducer(state, { type, payload }) {
    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: "",
            };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        case "TOGGLE_BASKET_SHOW":
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case "HANDLE_DECREMENT_COUNT":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity > 1 ? el.quantity - 1 : 1,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case "HANDLE_INCREMENT_COUNT":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity + 1,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case "ADD_TO_BASKET": {
            const itemIndexAdd = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );
            let newOrder = null;
            if (itemIndexAdd < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newItem["price"] = payload.price.regularPrice;
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndexAdd) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                alertName: payload.name,
                order: newOrder,
            };
        }

        default:
            return state;
    }
}
