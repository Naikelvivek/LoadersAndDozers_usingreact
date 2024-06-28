// src/redux/reducer.js

const handleCart = (state = [], action) => {
    const product = action.payload;

    switch (action.type) {
        case 'ADD_TO_CART':
        case 'ADDITEM': {
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ];
            }
        }

        case 'REMOVE_FROM_CART': {
            return state.filter((x) => x.id !== product.id);
        }

        case 'INCREASE_QUANTITY': {
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: x.qty + 1 } : x
            );
        }

        case 'DECREASE_QUANTITY':
        case 'DELITEM': {
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== product.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
        }

        default:
            return state;
    }
};

export default handleCart;
