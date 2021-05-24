import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import FiltreModal from "./FiltreModal";
import PostContext from "../PostState/postContext";

export const SearchBar = () => {
  const [searchForm, setSearchForm] = useState("");
  const { setSearch } = useContext(PostContext);

  const submitForm = (e) => {
    console.log("Submitting...");
    e.preventDefault();
    setSearch(searchForm);
  };
  const clear = () => {
    setSearch("");
    setSearchForm("");
  };
  return (
    <React.Fragment>
      <div className="container-sm mt-2">
        <form onSubmit={submitForm}>
          <div className="input-group row justify-content-md-center">
            <div className="input-group-prepend">
              <button className="btn btn-primary" type="button">
                <FiltreModal />
              </button>
            </div>
              <input
                value={searchForm}
                onChange={(e) => {
                  e.target.value === "" ? clear() : setSearchForm(e.target.value);
                }}
                className="col-7 form-control"
                type="text"
                placeholder="Search..."
                name="search"
              ></input>
              <div className="input-group-append" type="submit">
                <button className="btn btn-primary">
                <i className="fa fa-search">
                  <FontAwesomeIcon icon={faSearch} />
                </i>
                </button>
              </div>
            </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
