import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="container text-center mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="display-1 text-danger">404</h1>
                    <h2 className="mb-4">Page Not Found</h2>
                    
                    <Link to="/" className="btn btn-danger">
                        Go Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
