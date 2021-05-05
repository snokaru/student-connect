import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import "./Elements.css"


export const FiltreModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClick = () =>{
    
  }
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
          <div class="row ">
            <div class="col-3">
              <h1>Oras</h1>
              <div class="anyClass">
              <p>
                <input type="radio" id="test1" name="radio-group"></input>
                <label for="test1">Timisoara</label>
              </p>
              <p>
                <input type="radio" id="test2" name="radio-group"></input>
                <label for="test2">Bucuresti</label>
              </p>
              <p>
                <input type="radio" id="test3" name="radio-group"></input>
                <label for="test3">Cluj</label>
              </p>
              <p>
                <input type="radio" id="test31" name="radio-group"></input>
                <label for="test31">Iasi</label>
              </p>
              <p>
                <input type="radio" id="test32" name="radio-group"></input>
                <label for="test32">Bacau</label>
              </p>
              <p>
                <input type="radio" id="test33" name="radio-group"></input>
                <label for="test33">Constanta</label>
              </p>
              <p>
                <input type="radio" id="test34" name="radio-group"></input>
                <label for="test34">Craiova</label>
              </p>
              <p>
                <input type="radio" id="test35" name="radio-group"></input>
                <label for="test35">Brașov</label>
              </p>
              <p>
                <input type="radio" id="test36" name="radio-group"></input>
                <label for="test36">Brașov</label>
              </p>
              <p>
                <input type="radio" id="test37" name="radio-group"></input>
                <label for="test37">Galați</label>
              </p>
              <p>
                <input type="radio" id="test38" name="radio-group"></input>
                <label for="test38">Alba Iulia</label>
              </p>
              <p>
                <input type="radio" id="test39" name="radio-group"></input>
                <label for="test39">Ploiești</label>
              </p>
             </div>
            </div>
            <div class="col-5">
              <h1>Experienta</h1>
              <p>
                <input type="radio" id="test4" name="radio-group" ></input>
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
            <div class="col-1">
              <h1>Tip</h1>
              <p>
                <input type="radio" id="test7" name="radio-group"></input>
                <label for="test7">Hibrid</label>
              </p>
              <p>
                <input type="radio" id="test8" name="radio-group"></input>
                <label for="test8">Remote</label>
              </p>
              <p>
                <input type="radio" id="test9" name="radio-group"></input>
                <label for="test9">La birou</label>
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
  )
}

export default FiltreModal;
