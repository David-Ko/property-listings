import React, { Component } from "react";
import ListingTile from "./ListingTile";

class ListingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="parent">
        {this.props.data[this.props.page]
          ? this.props.data[this.props.page].map(listing => {
              return <ListingTile key={listing.id} listing={listing} />;
            })
          : ""}
      </div>
    );
  }
}

export default ListingList;
