import React, { useContext, useState } from "react";
import PostContext from "../PostState/postContext";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {locations} from "../../placeholders";

export const FiltreModal = () => {
  const [show, setShow] = useState(false);
  const postContext = useContext(PostContext);
  const { posts, setFilters } = postContext;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);

  const submitFilters = (e) => {
    e.preventDefault();

    handleClose();
    let filters = [];
    if (city) {
      filters.push({
        displayField: "City",
        displayValue: city,
        field: "workPlace",
        value: city,
      });
    }

    if (type === "part-time") {
      filters.push({
        displayField: "Type",
        displayValue: "Part-Time",
        field: "workHours[$lt]",
        value: 8,
      });
    } else if (type === "full-time") {
      filters.push({
        displayField: "Type",
        displayValue: "Full-Time",
        field: "workHours[$gte]",
        value: 8,
      });
    }

    setFilters(filters);
  };

  const workplaces = locations;
  return (
    <>
      <div onClick={handleShow}>
        Filters
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-center">City</h1>
                <div className="anyClass">
                  {workplaces.map((workplace, key) => (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        value={workplace}
                        onChange={(e) => setCity(e.target.value)}
                        type="radio"
                        id={`workplace${key}`}
                        name="radio-group"
                      ></input>
                      <label
                        className="form-check-label"
                        for={`workplace${key}`}
                      >
                        {workplace}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col">
                <h1 className="text-center">Type</h1>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value="part-time"
                    onChange={(e) => setType(e.target.value)}
                    type="radio"
                    id="part-time"
                    name="job-type"
                  ></input>
                  <label className="form-check-label" for="part-time">
                    Part-time
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value="full-time"
                    onChange={(e) => setType(e.target.value)}
                    type="radio"
                    id="full-time"
                    name="job-type"
                  ></input>
                  <label className="form-check-label" for="full-time">
                    Full-time
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitFilters}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FiltreModal;
