import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getHistoryAPI, removeHistoryAPI } from "../services/allAPI";

function WatchHistory() {
  const [history,setHistory] = useState([])
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory = async () =>{
    const result = await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }

  const removeHistoryItem = async (id) =>{
    await removeHistoryAPI(id)
    getHistory()
  }
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
          {history?.length>0? history?.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link} target="_blank" >{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td>
              <button className="btn" onClick={()=>removeHistoryItem(video?.id)}>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
          )):
          <p className="text-danger fw-bolder fs-4">Your Watch History is Empty!!!</p>
        }
        </tbody>
      </Table>
    </div>
  );
}

export default WatchHistory;
