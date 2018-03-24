import React, { Component } from 'react';
import Header from './header';
import HistoryHeader from '../containers/table';
import Footer from "./footer";
import OrderedPage from "./orderedPage";


export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <OrderedPage/>
          <Footer/>
      </div>
    );
  }
}
