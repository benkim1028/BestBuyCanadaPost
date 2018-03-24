import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchProduct} from "../actions/index";
import HistoryTable from "./table";
import {fetchDeliveryInfo} from "../actions";
import {Line} from 'rc-progress';
import {ProgressBar} from "react-bootstrap";
import GoogleMap from "../components/google_map";

class OrderedProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this.showDeliveryStatus = this.showDeliveryStatus.bind(this);
        this.showProgress = this.showProgress.bind(this);
    }

    _onButtonClick() {
        console.log("onButtonClick");
        this.setState({
            showComponent: !this.state.showComponent,
        });
    }
    showProgress(){
        const status = this.props.deliveryInfo[this.props.trackingNumber][0]["event-description"];
        if(status == "Delivered" || status == "Signature image recorded for Online viewing")
            return "100";
        if(status == "Item available for pickup at Post Office" || status == "Notice card left indicating where and when to pick up item")
            return "90";
        if(status == "Item out for delivery")
            return "70";
        if(status == "Item processed")
            return "50";
        if(status == "Electronic information submitted by shipper")
            return "10";
        else
            return "30";
    }

    showDeliveryStatus() {
        console.log("showDeliveryStatus Started");
        console.log(this.props.deliveryInfo[this.props.trackingNumber]);
        console.log(this.props.deliveryInfo[this.props.trackingNumber]);
        if (this.props.deliveryInfo[this.props.trackingNumber] && this.props.deliveryInfo[this.props.trackingNumber].length > 0) {
            return (
                <p style={{display: "inline"}}>{this.props.deliveryInfo[this.props.trackingNumber][0]["event-description"]}</p>
            )
        }
        else {
            return (
                <p style={{display: "inline"}}>not available</p>
            )
        }
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productID);
        this.props.fetchDeliveryInfo(this.props.trackingNumber);
    }


    render() {
        console.log("delivery Info");
        console.log(this.props.deliveryInfo);
        console.log("product");
        console.log(this.props.product);
        if (this.props.product == null || this.props.product[this.props.productID] == null) return <div>Loading...</div>
        const thisProduct = this.props.product[this.props.productID];
        console.log(thisProduct);
        return (
            <div className="row">
                <div className="col"/>
                <div className="col-8" style={{border: 2 + "px" + " solid grey", marginBottom: 10 + "px"}}>
                    <div className="row">
                        <div className="col-md-auto">
                            <img src={thisProduct.media.listImage.path}/>
                        </div>
                        <div className="col-2">
                            <p>{thisProduct.meta.title}</p>
                        </div>
                        <div className="col">
                            <p>Model Number: {thisProduct.manufacturerId.modelNumber}</p>
                            <p>{thisProduct.descriptions.short}</p><br/>
                            <p style={{display: "inline"}}>Delivery Status: {this.showDeliveryStatus()}</p>
                            <button type="button" onClick={() => this._onButtonClick()}
                                    className="btn btn-primary" style={{display: "inline"}}>Detail
                            </button><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"/>
                        <div className="col-md-auto">
                            {this.state.showComponent ?
                                <div>
                                    <ProgressBar active now={this.showProgress()} />;
                                    <HistoryTable trackingNumber={this.props.trackingNumber}/>
                                </div> :
                                null
                            }
                        </div>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {product: state.product, deliveryInfo: state.deliveryInfo}
}

export default connect(mapStateToProps, {fetchProduct, fetchDeliveryInfo})(OrderedProduct)
