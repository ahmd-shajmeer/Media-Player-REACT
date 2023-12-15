import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container">
      <div className="row align-items-center m-5">
        <div className="col-lg-5">
          <h3>
            Welcom to <span className="text-warning">Media Player</span>
          </h3>
          <p>
            Media Player App will allow you to add and remove their uploaded
            videos, also allow them to arrange them in different categories by
            providing drag and drop functionalities.
          </p>
          <Link to={"home"} className="btn btn-info mt-5 fw-bolder">
            Get Started
          </Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img
            src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="features">
        <h3 className="text-center">Features</h3>
        <div className="cards mt-5 d-flex justify-content-between">
          {/* {Card1} */}
          <Card style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/2881/2881036.png"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>User can add,remove and view the videos</Card.Text>
            </Card.Body>
          </Card>
          {/* {Card2} */}
          <Card style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/474x/52/d4/3d/52d43df470aa16c9e8aed9665c98b255.jpg"
            />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                User can catogerise their videos according to their preferences
                using drag and drop feature
              </Card.Text>
            </Card.Body>
          </Card>
          {/* {Card3} */}
          <Card style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-vector/hands-holding-tablet-with-video-player-screen-video-marketing-concept-tutorials-lectures-conference-webinar_163786-501.jpg"
              height={400}
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                User can see the last video that they have watched.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-5 border rounded align-items-center p-5">
        <div className="col-lg-5">
          <h3 className="text-warning mb-5">Simple, Fast and Powerful</h3>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5">Play Everything</span>: Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Facilis, cumque?
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5">Categorize Videos</span>: Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Perferendis ab velit est,
            vero omnis dolore!
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5">Watch History</span>: Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Sed dolorum eos in maxime
            expedita architecto!
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe
          className="w-100"
            width="1020"
            height="574"
            src="https://www.youtube.com/embed/QdBZY2fkU-0"
            title="Grand Theft Auto VI Trailer 1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
