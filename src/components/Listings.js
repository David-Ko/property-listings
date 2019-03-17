import React, { Component } from "react";
import ListingsData from "../mock-listing-data.json";
import "../../src/index.css";
import { Button } from "react-bootstrap";

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [...ListingsData]
    };
  }

  sortApartment() {
    this.setState({
      listings: [...ListingsData].filter(function(listing) {
        return listing.listing_type === "Apartment";
      })
    });
  }
  sortCondo() {
    this.setState({
      listings: [...ListingsData].filter(function(listing) {
        return listing.listing_type === "Condo";
      })
    });
  }
  sortOneBedroom() {
    this.setState({
      listings: [...ListingsData].filter(function(listing) {
        return listing.listing_type === "1 Bedroom";
      })
    });
  }
  sortTwoBedroom() {
    this.setState({
      listings: [...ListingsData].filter(function(listing) {
        return listing.listing_type === "2 Bedroom";
      })
    });
  }

  refresh() {
    this.setState({
      listings: [...ListingsData]
    });
  }
  render() {
    return (
      <>
        <div clasName="parent sort-menu">
          <h1>Listings</h1>
        </div>
        <h4>Sort by:</h4>
        <div className="parent sort-menu">
          <div className="sort-menu-item">
            <Button className="custom-btn" onClick={() => this.refresh()}>
              All{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button className="custom-btn" onClick={() => this.sortCondo()}>
              Condo{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button className="custom-btn" onClick={() => this.sortApartment()}>
              Apartment{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button
              className="custom-btn"
              onClick={() => this.sortOneBedroom()}
            >
              1 Bedroom{" "}
            </Button>
          </div>
          <div className="sort-menu-item">
            <Button
              className="custom-btn"
              onClick={() => this.sortTwoBedroom()}
            >
              2 Bedroom{" "}
            </Button>
          </div>
        </div>
        <div className="parent">
          {this.state.listings.map(listing => (
            <div key={listing.id} className="parent children">
              <div className="grandchildren">
                <div className="top inner-div">
                  <img src={listing.listing_image} alt="" />
                </div>
                <div className="bottom inner-div">
                  <ul className="detail-list">
                    <li>
                      <b>Listing #:</b> {listing.id}
                    </li>
                    <li>
                      <b>Address:</b> {listing.listing_address}
                    </li>
                    <li>
                      <b>Monthly rent:</b> {listing.listing_rent}
                    </li>
                    <li>
                      <b>Property type:</b> {listing.listing_type}
                    </li>
                    <li>
                      <b>Bedrooms:</b> {listing.listing_details.bedrooms}
                    </li>
                    <li>
                      <b>Bathrooms:</b> {listing.listing_details.bathrooms}
                    </li>
                    <li>
                      <b>Minimum deposit:</b>{" "}
                      {listing.listing_details.minimum_deposit}
                    </li>
                    <li>
                      <b>Contact number:</b>{" "}
                      {listing.listing_details.contact_number}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Listings;
