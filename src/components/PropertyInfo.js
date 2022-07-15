import React from "react";

function PropertyInfo({ propertyInfo }) {
  return (
    <div className="displayPropertyInfo">
      <h3 className="propertyPrice">
        ${propertyInfo[0].price.toLocaleString("en-US")}
      </h3>
      <div>
        <p className="propertyDetails">
          <strong>{propertyInfo[0].bed}</strong> bed
        </p>
        <p className="propertyDetails">
          <strong>{propertyInfo[0].bath}</strong> bath
        </p>
        <p className="propertyDetails">
          <strong>{propertyInfo[0].sqft.toLocaleString("en-US")}</strong> sqft
        </p>
        <p className="propertyDetails">
          <strong>{propertyInfo[0]["sqft-lot"].toLocaleString("en-US")}</strong>{" "}
          sqft-lot
        </p>
      </div>
      <div>
        <p className="propertyAddress">{propertyInfo[0].address}</p>
        <button type="button" className="changeProperty">
          Next Property
        </button>
      </div>
    </div>
  );
}

export default PropertyInfo;
