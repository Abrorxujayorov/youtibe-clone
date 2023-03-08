import React from 'react'   
import './vedioApp.css'
const VedioApp = ({pic, icons, info, link, prasmotr}) => {
  return (
            <div className='video'>
            <div className="video__thumbnail">
              <img src={pic} alt="" />
            </div>
            <div className="video__details">
              <div className="author">
                <img src={icons} alt="" />
              </div>
              <div className="title">
                <h3>{info}</h3>
                <a href=""> {link} </a>
                <span>{prasmotr}</span>
              </div>
            </div>
            </div>
  )
}

const Movia = ({ data }) => {
    return (
      <>
      {data.map(item => {
        return(
          <VedioApp pic={item.pic} icons={item.icons} info={item.info} link={item.link} prasmotr={item.prasmotr} />
        )
      })}
      </>
    )
  }
  export default Movia
