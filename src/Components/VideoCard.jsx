import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card>
        <Card.Img
          onClick={handleShow}
          height={"300px"}
          variant="top"
          src="https://wallpapercg.com/media/ts_orig/18750.webp"
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>Video Title</h6>
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
          className="w-100"
            width="1020"
            height="574"
            src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1"
            title="Grand Theft Auto VI Trailer 1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
