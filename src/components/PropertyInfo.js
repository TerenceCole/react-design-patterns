import React from "react";

function PropertyInfo({ propertyInfo }) {
  return (
    <div className="displayPropertyInfo">
      <h3 className="propertyPrice">
        ${propertyInfo[0].price.toLocaleString("en-US")}
      </h3>
    </div>
  );
}

export default PropertyInfo;
