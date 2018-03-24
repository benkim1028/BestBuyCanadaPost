import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchDeliveryInfo, fetchProduct} from "../actions";

class HistoryTable extends Component {
    renderOccurence(event) {
        const date = event["event-date"];
        const time = event["event-time"];
        const site = event["event-site"];
        const desc = event["event-description"];
        const loc = event["event-retail-location-id"];
        const name = event["event-retail-name"];
        return (
            <tr class="odd">
                <td>{date}</td>
                <td>{time}</td>
                <td>{site}</td>
                <td>{desc}</td>
                <td>{loc}</td>
                <td>{name}</td>
            </tr>
        )
    }


    render() {
        console.log(this.props.deliveryInfo[this.props.trackingNumber]);
        return (
            <div className="text-center">
                <table className="blueTable">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th><b>Retail Location</b></th>
                        <th><b>Signatory Name</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.deliveryInfo[this.props.trackingNumber].map(this.renderOccurence)}
                    </tbody>
                </table>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {deliveryInfo: state.deliveryInfo}
}

export default connect(mapStateToProps)(HistoryTable)
