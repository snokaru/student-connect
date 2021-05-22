import React, { useContext } from "react";
import PostContext from "../PostState/postContext";

const CurrentFilters = () => {
  const { filters, removeFilter } = useContext(PostContext);

  return (
    <div className="align-self-center my-3">
      {filters.map((filter, key) => (
        <div className="border d-inline rounded ">
          <span className="p-2 ">
            {filter.displayField + ": " + filter.displayValue}
          </span>
          <span
            className="bg-danger text-white p-0"
            style={{ cursor: "pointer" }}
            onClick={() => removeFilter(key)}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
};

export default CurrentFilters;
