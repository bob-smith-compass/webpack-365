import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        This is a secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        This is a light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        This is a dark alert—check it out!
      </div>

      <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </div>
  );
}
