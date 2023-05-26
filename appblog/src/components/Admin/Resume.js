import React from 'react'
import resume from "../resume.jpg"

function Resume() {
  return (
    <div>
     <div class="content-panel">
     <div class="content-header-wrapper">
                  <h2 class="title"> Admin Resume </h2>
                  <div class="actions">
                    <button class="btn btn-success">
                      <i class="fa fa-plus"></i> Upload New Item
                    </button>
                  </div>
                </div>
       <img  style={{width:'100%'}} src={resume} alt="resume"/>
     </div>
    </div>
  )
}

export default Resume
