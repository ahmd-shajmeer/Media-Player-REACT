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
          src="https://www.flore-maquin.com/wp-content/uploads/Fight_club_RVB_72.jpg"
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
            width="600"
            height="438"
            src="https://www.youtube.com/embed/abuLOH7xs8I?autoplay=1"
            title="Neru - Official Trailer | Mohanlal | Jeethu Joseph | Priyamani | Anaswara Rajan | Antony Perumbavoor"
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
