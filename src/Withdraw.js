import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import WithdrawTable from './WithdrawTable';
export default class Trade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WithdrawList: [],
      searchString: "",
      paginationValues: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

 

  componentDidMount() {
    
    let url = 'http://blockchaintech-code-test.herokuapp.com/withdraws.json';
    axios.get(url)
      .then(response => {
       
        let pagination=response.data.pagination;
        let data = response.data.withdraws;
     
     
        this.setState({
          WithdrawList: data,
          paginationValues:pagination
        });
      })
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value });
    //debugger;
  }

  sortBy(sortByVariable) {
      this.setState({
        WithdrawList:this.state.WithdrawList.sort((a,b)=> ( a[sortByVariable] - b[sortByVariable]    ))
    })
  }

  render() {
    console.log("pagination from response",this.state.paginationValues);
 let WithdrawList = this.state.WithdrawList.filter((list) => {
      return list.uuid.indexOf(this.state.searchString) !== -1 
      ||list.amount.indexOf(this.state.searchString) !== -1  || list.bankReferenceNumber.indexOf(this.state.searchString.toUpperCase()) !== -1;
    });
  
    return (
      <div>
        <input className="prompt"
          onChange={this.handleChange}
          onKeyPress={this.handleChange}
          type="text"
          placeholder="Search" />
      <WithdrawTable WithdrawList={WithdrawList} paginationValues={this.state.paginationValues} sortBy={this.sortBy}></WithdrawTable>
      </div>
    );
  }
}