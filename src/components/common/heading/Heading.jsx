import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h2>{subtitle} </h2>
        <h1 >{title} </h1>
      </div>
    </>
  )
}

export default Heading
