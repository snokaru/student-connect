import React, { useContext } from "react";
import PostContext from "../PostState/postContext";

const CurrentFilters = () => {
  const { filters, removeFilter } = useContext(PostContext);

  return (
    <div className="form-inline align-self-center justify-content-center my-3">
      {filters.map((filter, key) => (
        <div className="input-group m-2">
          <div 
            className="form-control"
          >
            {filter.displayField + ": " + filter.displayValue}
          </div>
          <div class="input-group-append">
            <button
              className="btn btn-danger"
              onClick={() => removeFilter(key)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentFilters;
