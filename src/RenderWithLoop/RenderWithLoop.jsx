import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  productList = [{ id: 1, name: "black car", price: 1000 }];
  render() {
    return <div>RenderWithLoop</div>;
  }
}
