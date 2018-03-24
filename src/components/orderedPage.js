import React, {Component} from "react";
import OrderedProduct from "../containers/orderedProduct"
import GoogleMap from "./google_map";

class OrderedPage extends Component {
    render() {
        return (
            <div>
                <h1>Ordered Products</h1><br/>
                <GoogleMap />
                <OrderedProduct productID="12222651" trackingNumber="2007224001104216"/>
                <OrderedProduct productID="12322177" trackingNumber="4006170055660527"/>
                <OrderedProduct productID="11558159" trackingNumber="2007224001104216"/>
                <br/>
            </div>
        )
    }
}

export default OrderedPage;