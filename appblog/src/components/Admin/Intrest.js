import React from 'react'

function Intrest() {
  return (
    <div>
     <div class="content-panel">
     <div class="content-header-wrapper">
                  <h2 class="title"> Admin Intrest </h2>
                  <div class="actions">
                    <button class="btn btn-success">
                      <i class="fa fa-plus"></i> Upload New Item
                    </button>
                  </div>
                </div>
                {<div class="interests-items" style={{marginTop:"150px"}}>
        <div class="draw"><i class="fa fa-paint-brush"></i><span>Draw</span></div>
        <div class="movie"><i class="fa fa-film"></i><span>Movie</span></div>
        <div class="music"><i class="fa fa-headphones"></i><span>Music</span></div>
        <div class="game"><i class="fa fa-gamepad"></i><span>Game</span></div>
      </div>}
     </div>
    </div>
  )
}

export default Intrest
