import React, { useState } from "react";
import { Button, FloatingLabel, Modal, Form } from "react-bootstrap";

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button className="btn" onClick={handleShow}>
          <i
            class="fa-solid fa-file-video fa-2x"
            style={{ color: "white" }}
          ></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the Following Details</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video ID"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="URL Only!!!" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="URL Only!!!" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video URL"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="URL Only!!!" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video Image URL"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="URL Only!!!" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
