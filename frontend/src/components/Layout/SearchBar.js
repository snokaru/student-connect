import React from "react";
import "./searchbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import FiltreModal from "./FiltreModal";
import PostContext from "../PostState/postContext";

export const SearchBar = () => {
  const [searchForm, setSearchForm] = useState("");
  const { setSearch } = useContext(PostContext);

  const submitForm = e => {
    console.log("Submitting...")
    e.preventDefault();
    setSearch(searchForm)
  }

  return (
    <React.Fragment>
      <div className="container-sm ">
        <form className="example" onSubmit={submitForm}>
          <div className="row justify-content-md-center">
            <button className="col-2" type="button"><FiltreModal/></button>
            <input
              value={searchForm}
              onChange={e => setSearchForm(e.target.value)}
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
