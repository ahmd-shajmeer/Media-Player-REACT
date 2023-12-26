import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryAPI, getAllVideosAPI, updateCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse,setDropResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState(false)
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllUploadVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

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

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDropped = async (e) => {
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data} = await getAllCategoryAPI()
    const  selectedCategory = data.find(item=>item.id==categoryId)
    let result = selectedCategory.allVideos.filter(video=>video.id!=videoId)
    console.log(result);
    let {id,categoryName} = selectedCategory
    let newCategory = {id,categoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropResponse(res)
  }

  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>
      {
        allVideos?.length>0?allVideos.map(video => (
          <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
      </Col>
        )):<p className='fs-4 text-danger fw-bolder'>No Videos Uploaded Yet!!</p>
      }
    </Row>
    </>
  )
}

export default View