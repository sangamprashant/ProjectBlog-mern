import React from 'react'

function SoftSkill() {
  return (
    <div>
    <div class="content-panel">
        <div class="content-header-wrapper">
          <h2 class="title">Admin Skill</h2>
          <div class="actions">
            <button class="btn btn-success">
              <i class="fa fa-plus"></i> Upload New Item
            </button>
          </div>
        </div>
        <hr/>
        <div class="skills-prog">
     
      <ul>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}} ><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'100%'}}> </div>
          </div>
        </li>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}}><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'60%'}}></div>
          </div>
        </li>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}}><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'40%'}}></div>
          </div>
        </li>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}}><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'90%'}}></div>
          </div>
        </li>
        <li data-percent="92"><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'50%'}}></div>
          </div>
        </li>
        
      </ul>
    </div>
      
    </div>
    </div>
   
   
  )
}

export default SoftSkill
