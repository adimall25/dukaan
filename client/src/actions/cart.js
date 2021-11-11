import { GET_BUYER_CART, GET_BUYER_CART_ERROR } from "./types";


export function getBuyerCart(buyer_id)
{
    return async (dispatch) => {
        try
        {
            dispatch({
                type : GET_BUYER_CART
            })

            const res = await axios.get
        }
        catch(err)
        {
            console.log(err);
            dispatch({
                type : GET_BUYER_CART_ERROR,
                payload : err
            })
        }
    }
}