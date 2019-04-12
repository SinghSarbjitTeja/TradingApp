import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";
export default class Trade extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //"uuid":"98210ff8-1edc-4f72-b21c-28879c4ec650","createdAt":1553579324803,
    //"amount":"200.89","status":"PROCESSED","bankReferenceNumber":"JEWELERY"
    const { key, WithdrawRow } = this.props;
    return (
      < tr key={key}>

        <td>{WithdrawRow.uuid}</td>
        <td>{WithdrawRow.createdAt}</td>
        <td>{WithdrawRow.amount}</td>
        <td>{WithdrawRow.status}</td>
        <td>{WithdrawRow.bankReferenceNumber}</td>
       

      </tr >
      
    );
  }
}