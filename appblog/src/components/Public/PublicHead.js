import React from "react";

function PublicHead() {
  return (
      <div className="card">
        <div className=" text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: "150px" }}
          />
          <h5 className="my-3">Prashant Srivastav</h5>
          <p className="text-muted mb-1">Full Stack Developer</p>
          <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
        </div>
      </div>
  );
}

export default PublicHead;
