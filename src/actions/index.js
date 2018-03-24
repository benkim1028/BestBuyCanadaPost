import axios from "axios";


export const FETCH_PRODUCT = "a product is fetched";
export const FETCH_DELIVERY_INFO = "a delivery info is fetched";


const BESTBUY_URL = "https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/";
const BACKEND_URL = "http://127.0.0.1:5000/getDetails";

export function fetchProduct(productID){
    const request = axios({
        method: 'get',
        url: `${BESTBUY_URL}/${productID}`,
        mode: 'cors'
    });

    return (dispatch) => {
        request.then(
            ({data}) => {
                console.log(data);
                dispatch({type: FETCH_PRODUCT, payload: data.overview})

            }
        )
    }
}

export function fetchDeliveryInfo(trackingNumber){
    const request = axios({
        method: 'get',
        url: `${BACKEND_URL}/${trackingNumber}`,
        mode: 'cors'
    });
    return (dispatch) => {
        request.then(
            ({data}) => {
                console.log(data);
                dispatch({type: FETCH_DELIVERY_INFO, payload: data})
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }
}

