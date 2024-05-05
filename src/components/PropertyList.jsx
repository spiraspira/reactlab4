import React, { Component } from "react";

class PropertyList extends Component {
  render() {
    const { properties } = this.props;

    return (
      <section className="property-list">
        <h2>Доступные объекты недвижимости</h2>
        <ul>
          {properties.map((property, index) => (
            <li key={index}>{property}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default PropertyList;