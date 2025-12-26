import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm mb-4">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-danger" to="/">
          🍽 Restaurant
        </Link>

        {/* Right side */}
        <div className="ms-auto">
          <Link
            to="/cart"
            className="btn btn-outline-danger position-relative"
          >
            🛒 Cart

            {/* Badge (static UI) */}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
