import React from "react";

const Display = props => {
  const { specials, numbers, operators } = props;
  return <div className="display-value">{(specials, numbers, operators)}</div>;
};
/* Display any props data here */

export default Display;
