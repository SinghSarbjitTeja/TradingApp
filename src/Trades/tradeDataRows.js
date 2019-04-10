import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";
export default class Trade extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { key, tradeRow } = this.props;
    return (
      < tr key={key}>

        <td>{tradeRow.uuid}</td>
        <td>{tradeRow.updatedAt}</td>
        <td>{tradeRow.price}</td>
        <td>{tradeRow.volume}</td>
        <td>{tradeRow.side}</td>
        <td>{tradeRow.tradingPair.uuid}</td>
        <td>{tradeRow.tradingPair.symbol}</td>

      </tr >
      
    );
  }
}