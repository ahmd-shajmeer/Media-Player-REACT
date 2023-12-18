import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI } from '../services/allAPI'

function View() {
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllUploadVideos()
  },[])

  const getAllUploadVideos = async () => {
    const result = await getAllVideosAPI()
    if(result.status===200){
      console.log(result);
      setAllVideos(result.data)
    }else{
      console.log("API Failed");
      setAllVideos([])
    }
  }

  return (
    <>
    <Row>
      {
        allVideos?.length>0?allVideos.map(video => (
          <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
      </Col>
        )):<p className='fs-4 text-danger fw-bolder'>No Videos Uploaded Yet!!</p>
      }
    </Row>
    </>
  )
}

export default View