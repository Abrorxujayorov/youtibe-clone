import React from 'react'
import './bebir.css'
import Setbaber from '../setbaber/setbaber'
const Bebir = () => {
  return (
    <>
     <div className="sidebar">
        <div className="sidebar__categories">
          <Setbaber text="Home" icon="home"/>
          <Setbaber text="Trending" icon="local_fire_department"/>
          <Setbaber text="Subcriptions" icon="subscriptions"/>
        <hr />
        <Setbaber text="Library" icon="library_add_check"/>
        <Setbaber text="History" icon="history"/>
        <Setbaber text="Your Videos" icon="play_arrow"/>
        <Setbaber text="Watch Later" icon="watch_later"/>
        <Setbaber text="Liked Videos" icon="thumb_up"/>
        </div>          
        <hr />
      </div>
    </>
  )
}

export default Bebir