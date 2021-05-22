import React, { useContext } from "react";
import PostContext from "../PostState/postContext";

const CurrentFilters = () => {
  const { filters, removeFilter } = useContext(PostContext);

  return (
    <p className="align-self-center my-3">
      {filters.map((filter, key) => (
        <div className="btn-group m-2">
          <button 
            className="bg-white border border-dark text-dark p-2"
            style={{ cursor: "default" }}
          >
            {filter.displayField + ": " + filter.displayValue}
          </button>
          <button
            className="btn btn-danger p-2"
            onClick={() => removeFilter(key)}
          >
            X
          </button>
        </div>
      ))}
    </p>
  );
};

export default CurrentFilters;
