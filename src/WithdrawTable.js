import React, { Component } from 'react';
import Pagination from './Trades/Pagination';
//import { TablePagination  } from 'react-pagination-table';
import _ from "lodash";
import WithdrawDataRow from './WithdrawDataRows';
import "bootstrap/dist/css/bootstrap.css";



export default class TradeTableData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            pageSize:9,
            pageOfItems: [],
            WithdrawList: []
        };
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onPageChange = this.onPageChange.bind(this);      
    }


    onPageChange(pageOfItems) {
        // update state with new page of items
        this.setState({ currentPage: pageOfItems });
    }


    render() {
 let number=this.props.paginationValues.number; 
 console.log("Number ",number+" "+this.props.paginationValues.size);
        const start = (this.state.currentPage - 1) * this.state.pageSize;
        const End = this.state.pageSize * this.state.currentPage;
        console.log(start + "------" + End);
        let WithdrawList = this.props.WithdrawList.slice(start,End);
        
        console.log( this.props.WithdrawList);
        console.log(this.props.Pagination)

       
        return (
          
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th onClick={()=> this.props.sortBy("uuid")}>uuid</th>
                        <th onClick={()=> this.props.sortBy("createdAt")}> createdAt</th>
                        <th onClick={()=> this.props.sortBy("amount")}>amount</th>
                        <th>status</th>
                        <th>bankReferenceNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {                      
                            WithdrawList.map(obj => (
                                <WithdrawDataRow key={obj.uuid} WithdrawRow={obj} />
                            ))
                    }
                    <Pagination  itemsCount={this.props.WithdrawList.length} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.onPageChange} />         
                </tbody>

            </table>
        );
    }
}
