import React from "react";

function Picture({ photoUrl }) {
  return (
    <>
      <img src={photoUrl} className="houseImage" alt="house" />
    </>
  );
}

export default Picture;
