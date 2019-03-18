import React, { Component } from "react";
import ListingsData from "../mock-listing-data.json";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import ListingList from "./ListingList";
import config from "../config";
import "../../src/index.css";
import picture from "../assets/images/home.jpg";

let perPage = config.perPage;

class ListingIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0,
      sort: null,
      page: 0,
      listings: {},
      pageCount: 0
    };
  }

  componentDidMount() {
    this.loadData(null);
  }

  createDataObject(data, sort = null) {
    let filteredData = [];
    if (sort) {
      filteredData = data.filter(listing => {
        return listing.listing_type === sort;
      });
    }
    let dataLength = sort ? filteredData.length : data.length;
    let sets = Math.ceil(dataLength / perPage);

    let sortedListings = {};
    let counter = 0;
    for (
      let sortedListingsKey = 0;
      sortedListingsKey < sets;
      sortedListingsKey++
    ) {
      let sortedListingsValueArray = [];
      for (
        let sortedListingsValue = 0;
        sortedListingsValue < perPage;
        sortedListingsValue++
      ) {
        if (sort) {
          if (filteredData[counter]) {
            sortedListingsValueArray.push(filteredData[counter]);
            counter++;
          } else {
            break;
          }
        } else {
          if (data[counter]) {
            sortedListingsValueArray.push(data[counter]);
            counter++;
          } else {
            break;
          }
        }
      }
      sortedListings[sortedListingsKey] = sortedListingsValueArray;
    }
    this.setState({ listings: sortedListings, pageCount: sets });
  }

  loadData = sort => {
    this.setState({ sort });
    this.createDataObject(ListingsData, sort);
  };

  handleSort = event => {
    this.setState({ page: 0 });
    if (event.target.name !== "All") {
      this.loadData(event.target.name);
    } else {
      this.loadData(null);
    }
  };

  renderSorter() {
    return (
      <>
        <div className="sort-menu">
          <h1>Listings</h1>
        </div>
        <h4>Sort by:</h4>
        <div className="parent sort-menu">
          <div className="sort-menu-item">
            <Button name="All" className="custom-btn" onClick={this.handleSort}>
              All{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button
              name="Condo"
              className="custom-btn"
              onClick={this.handleSort}
            >
              Condo{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button
              name="Apartment"
              className="custom-btn"
              onClick={this.handleSort}
            >
              Apartment{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button
              name="1 Bedroom"
              className="custom-btn"
              onClick={this.handleSort}
            >
              1 Bedroom{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button
              className="custom-btn"
              name="2 Bedroom"
              onClick={this.handleSort}
            >
              2 Bedroom{" "}
            </Button>
          </div>
        </div>
      </>
    );
  }

  handlePageClick = data => {
    this.setState({ page: data.selected });
  };

  render() {
    return (
      <div>
        {this.renderSorter()}
        <ListingList data={this.state.listings} page={this.state.page} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        <div className="container welcome">
          <img className="background-picture listings" src={picture} alt="" />
        </div>
      </div>
    );
  }
}

export default ListingIndex;
