import React from "react"
import "./about.css"
import { useNavigate } from "react-router-dom";



const AboutCard = ({ title, backgroundImage, homeAboutData }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSBImage'>
          <div className='left row'>
            <img src={backgroundImage} alt='' />
          </div>
          <div className='right row'>
            <h1>{title}</h1>
            <div className='items'>
              {homeAboutData.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text' onClick={()=>navigate(val.path)}>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
