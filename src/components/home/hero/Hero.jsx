import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading  subtitle='WELCOME TO WOODWANDER !' title='Streamlined timber permits and licenses' />
          <div className='row1'>
            <p>The official government portal dedicated to facilitating the issuance of timber cutting and transport permits, providing transparent processes, and upholding regulatory standards to promote sustainable forestry practices nationwide</p>
          </div>
          <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
