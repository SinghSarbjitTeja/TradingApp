import React, { Component } from 'react';
import TradeDataRows from './tradeDataRows.js';
import Pagination from './Pagination';
//import { TablePagination  } from 'react-pagination-table';
import _ from "lodash";
 
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default class TradeTableData extends Component {

    constructor(props) {
        super(props);
        this.state = {
         currentPage:1,
         pageSize:2,
            pageOfItems: [],
            tradesList:[]
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onPageChange = this.onPageChange.bind(this);
        
    }
    //{"uuid":"20e31aef-b718-46a5-a7ee-77982e093786",
    //"updatedAt":1526397461000,"volume":"8.72005",
    //"price":"4874.44","side":"ASK",
    //"tradingPair":{"uuid":"c5229898-0afe-4b87-87e0-de451f6c1f30","symbol":"ETH/AUD"}}


    ///this function does paginantion  
   // getDerivedStateFromProps(props,state){
   //  state.tradesList=props.tradesList;
    //}

    onPageChange(pageOfItems) {
        // update state with new page of items
        this.setState({currentPage: pageOfItems });
    }

     
    render() {
        const start = (this.state.currentPage-1)*this.state.pageSize;
        const End = this.state.pageSize*this.state.currentPage;
        console.log(start+"------"+End);
     //const tradesList = this.props.tradesList.slice(start).take(this.state.pageSize).value();
     //const data = this.props.tradesList;
    let tradesList = this.props.tradesList.slice(start,End);
    // const test = Object.assign({},this.props.tradesList);
    // const tradesList = _.test.slice(start).take(thi)

console.log(tradesList)
        console.log(tradesList);
        //debugger;
        return (

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>uuid</th>
                        <th onClick={()=> this.props.sortBy("updatedAt")}  >     
                        <a href="#">updatedAt
          <span className="glyphicon glyphicon-sort-by-attributes"></span>
        </a>
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
