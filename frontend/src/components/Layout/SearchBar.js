import React from "react";
import "./searchbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const SearchBar = () => {
  const [searchFilter, setSearchFilter] = useState();

  return (
    <React.Fragment>
      <div className="container-sm ">
        <form className="example">
          <div className="row justify-content-md-center">
            <button className="col-2">Filtre</button>
            <input
              className="col-7"
              type="text"
              placeholder="Cauta.."
              name="search"
            ></input>
            <button className="col-1" type="submit">
              <i className="fa fa-search">
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
