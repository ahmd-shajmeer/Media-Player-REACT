import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function WatchHistory() {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link className="nav-link text-white fs-5" to={"/home"}>
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </Link>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Video Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th><i className="fa-solid fa-ellipsis"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className="btn">
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default WatchHistory;
