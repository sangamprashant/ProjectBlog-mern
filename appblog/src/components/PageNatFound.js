import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="container text-center">
      <h1 className="mt-5">Page Not Found</h1>
      <p className="lead">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go Back to Home</Link>
    </div>
  );
}

export default PageNotFound;
