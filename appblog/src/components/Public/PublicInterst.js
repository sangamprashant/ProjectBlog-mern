import React from "react";

function PublicIntrest() {
  return (
    <div className="my-3" style={{backgroundColor:"white"}}>
      <div class="card-body mb-4 mb-md-0">
          <div class="interests-items">
            <div class="draw">
              <i class="fa fa-paint-brush"></i>
              <span>Draw</span>
            </div>
            <div class="movie">
              <i class="fa fa-film"></i>
              <span>Movie</span>
            </div>
            <div class="music">
              <i class="fa fa-headphones"></i>
              <span>Music</span>
            </div>
            <div class="game">
              <i class="fa fa-gamepad"></i>
              <span>Game</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default PublicIntrest;
