import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    // <div className="container">
    //       <div className="row position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    //         <div className="col-md-6 p-lg-5 mx-auto my-5">
    //           <h1 className="display-3 fw-bold">Designed for engineers</h1>
    //           <h3 className="fw-normal text-muted mb-3">
    //             Build anything you want with Aperture
    //           </h3>
    //           <div className="d-flex gap-3 justify-content-center lead fw-normal">
    //             <Link to="/signup" className="icon-link">
    //               Learn more
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    // //     </div>
    <main className="px-3 text-center d-flex flex-column align-items-center justify-content-center">
      <h1>Authentication</h1>
      <p className="lead">
        {/* Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own. */}
        This is a simple web application to perform authentication.
      </p>
      <p className="lead">
        <Link
          to="/signup"
          className="btn btn-lg btn-light fw-bold border-white bg-white"
        >
          Learn more
        </Link>
      </p>
    </main>
  );
};

export default Home;
