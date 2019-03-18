import React, { Component } from "react";

class ListingTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div key={this.props.listing.id} className="parent children">
        <div className="grandchildren">
          <div className="top inner-div">
            <img src={this.props.listing.listing_image} alt="" />
          </div>
          <div className="bottom inner-div">
            <ul className="detail-list">
              <li>
                <b>Listing #:</b> {this.props.listing.id}
              </li>
              <li>
                <b>Address:</b> {this.props.listing.listing_address}
              </li>
              <li>
                <b>Monthly rent:</b> {this.props.listing.listing_rent}
              </li>
              <li>
                <b>Property type:</b> {this.props.listing.listing_type}
              </li>
              <li>
                <b>Bedrooms:</b> {this.props.listing.listing_details.bedrooms}
              </li>
              <li>
                <b>Bathrooms:</b> {this.props.listing.listing_details.bathrooms}
              </li>
              <li>
                <b>Minimum deposit:</b>{" "}
                {this.props.listing.listing_details.minimum_deposit}
              </li>
              <li>
                <b>Contact number:</b>{" "}
                {this.props.listing.listing_details.contact_number}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingTile;
