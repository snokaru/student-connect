import React, { useContext, useState } from "react";
import PostContext from "../PostState/postContext";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export const FiltreModal = () => {
  const [show, setShow] = useState(false);
  const postContext = useContext(PostContext);
  const { posts } = postContext;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);

  const workplaces = [...new Set(posts?.map((post) => post.workPlace))];
  return (
    <>
      <div variant="primary" onClick={handleShow}>
        Filtre
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FiltreModal;
