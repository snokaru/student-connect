import React, { useContext, useState } from "react";
import PostContext from "../PostState/postContext";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./Elements.css";

export const FiltreModal = () => {
  const [show, setShow] = useState(false);
  const postContext = useContext(PostContext);
  const { posts } = postContext;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClick = () => {};
  
  return (
    <>
      <div variant="primary" onClick={handleShow}>
        Filtre
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtre Cautare</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col-3">
              <h1>Oras</h1>
              <div className="anyClass">
                {posts.map((post) => (
                  <p>
                    <input type="radio" id="test1" name="radio-group"></input>
                    <label for="test1">{post.workPlace}</label>
                  </p>
                ))}
              </div>
            </div>
            <div className="col-5">
              <h1>Experienta</h1>
              <p>
                <input type="radio" id="test4" name="radio-group"></input>
                <label for="test4">Senior</label>
              </p>
              <p>
                <input type="radio" id="test5" name="radio-group"></input>
                <label for="test5">Junior</label>
              </p>
              <p>
                <input type="radio" id="test6" name="radio-group"></input>
                <label for="test6">Fara Experienta</label>
              </p>
            </div>
            <div className="col-1">
              <h1>Tip</h1>
              <p>
                <input type="radio" id="test7" name="radio-group"></input>
                <label for="test7">Part-time</label>
              </p>
              <p>
                <input type="radio" id="test8" name="radio-group"></input>
                <label for="test8">Full-time</label>
              </p>
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
