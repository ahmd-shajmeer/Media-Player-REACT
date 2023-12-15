import React, { useState } from "react";
import { Button, FloatingLabel, Modal, Form } from "react-bootstrap";

function Add() {
  const [uploadVideo, setUploadVideo] = useState({
    id: "",
    caption: "",
    url: "",
    link: "",
  });

  const getYoutubeEmbedLink = (e) =>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else
    setUploadVideo({...uploadVideo,link:""})

  }

  // Modal
  const [show, setShow] = useState(false);
  console.log(uploadVideo);
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
            <Form.Control
              type="text"
              placeholder="URL Only!!!"
              onChange={(e) =>
                setUploadVideo({ ...uploadVideo, id: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="URL Only!!!"
              onChange={(e) =>
                setUploadVideo({ ...uploadVideo, caption: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video URL"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="URL Only!!!"
              onChange={(e) =>
                setUploadVideo({ ...uploadVideo, url: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Video Image URL"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="URL Only!!!"
              onChange={getYoutubeEmbedLink}
            />
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
