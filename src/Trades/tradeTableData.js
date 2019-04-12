import React, { Component } from 'react';
import TradeDataRows from './tradeDataRows.js';
import Pagination from './Pagination';
//import { TablePagination  } from 'react-pagination-table';
import _ from "lodash";
 
import "bootstrap/dist/css/bootstrap.css";
 


export default class TradeTableData extends Component {

    constructor(props) {
        super(props);
        this.state = {
         currentPage:1,
         pageSize:5,
            pageOfItems: [],
            tradesList:[]
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onPageChange = this.onPageChange.bind(this);
        
    }
    

    onPageChange(pageOfItems) {
        // update state with new page of items
        this.setState({currentPage: pageOfItems });
    }

     
    render() {
        const start = (this.state.currentPage-1)*this.state.pageSize;
        const End = this.state.pageSize*this.state.currentPage;
        console.log(start+"------"+End);
     
    let tradesList = this.props.tradesList.slice(start,End);
  

console.log(tradesList)
        console.log(tradesList);
        //debugger;
        return (

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>uuid</th>
                        <th onClick={()=> this.props.sortBy("updatedAt")}  >    
                        <span class="glyphicon glyphicon-triangle-bottom"></span>
                        <i className="fa fa-fw fa-sort"></i>
                       updatedAt 
        
                     </th>
                        <th onClick={()=> this.props.sortBy("price")}>price</th>
                        <th onClick={()=> this.props.sortBy("volume")}>volume</th>
                        <th>side</th>
                        <th>tradingPairId</th>
                        <th>tradingPairSymbol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tradesList.map(obj => (
                        <TradeDataRows key={obj.uuid} tradeRow={obj} />
                    ))
                 }
                   <Pagination  itemsCount={this.props.tradesList.length} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.onPageChange} />         
               </tbody>
             
            </table>
        );
    }
}
