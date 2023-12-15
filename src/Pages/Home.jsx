import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <div className="add-video">
        <Add/>
      </div>
      <Link to={'/history'} className='nav-link text-white fs-4'>
      Watch History <i class="fa-solid fa-clock-rotate-left"></i>
      </Link>
    </div>
    <div className="container-fluid row w-100 mt-5 mb-5">
      <div className="view-videos col-lg-9">
        <h2 className=''>All Upoaded Videos</h2>
        <View/>
      </div>
      <div className="category col-lg-3">
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home