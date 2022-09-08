import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <>
        <div class="container-fluid float-start mt-3">
          <div class="row bg-warning shadow-lg mb-1">
            <div class="col-md-1"></div>
            <div class="col-md-5">
              <p class="fs-3 mt-4 fw-bold center ">
                Lorem ipsum dositamet,consectetur adipisicing elit, sed do.Lorem
                ipsum dositamet,consectetur adipisicing elit,
              </p>
              <p class="fs-4">Lorem ipsum dositamet,consectetur adipisicing </p>
              <button type="submit" class="btn btn-primary mb-2 text-center">
                Join Us YesterDay
              </button>
            </div>
  
            <div class="col-md-3 text-center pt-0 pb-3">
              <h5 class="pt-4  fw-bold fs-3">Connected With Us</h5>
              <a>
                <i class="fa-brands fa-twitter me-3 p-2 shadow-lg rounded-2 text-dark bg-white fw-bold fs-4 "></i>
              </a>
              <a >
                <i class="fa-brands fa-google me-3 p-2 shadow-lg rounded-2 text-dark bg-white fw-bold fs-4 "></i>
              </a>
              <a >
                <i class="fa-brands fa-github me-3 p-2 shadow-lg rounded-2 text-dark bg-white fw-bold fs-4 "></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin-in me-3 shadow-lg rounded-2 p-2 text-dark bg-white fw-bold fs-4 "></i>
              </a>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
        <div class="container-fluid float-start bg-dark text-white ">
          <div class="row ">
            <div class="col-md-1"></div>
            <div class="col pt-5">
              <i class="fa-brands fa-react text-white fs-1 ps-5" href="home"></i>
            </div>
            <div class="col col-xm-12 pt-5">
              <h3 class="fw-bold">Resourse</h3>
              <h5 class="text-capitalize">digital ocean</h5>
              <h5 class="text-capitalize">cloudways</h5>
              <h5 class="text-capitalize">page speed test</h5>
              <h5 class="text-capitalize">eleminator page builder</h5>
              <h5 class="text-capitalize">our free themes</h5>
            </div>
            <div class="col col-xm-12 pt-5">
              <h3 class="fw-bold">Author</h3>
              <h5 class="text-capitalize">about us</h5>
              <h5 class="text-capitalize">affilates</h5>
              <h5 class="text-capitalize">licence</h5>
              <h5 class="text-capitalize">blog</h5>
              <h5 class="text-capitalize">contact</h5>
            </div>
            <div class="col col-xm-12 pt-5">
              <h3 class="fw-bold">Download</h3>
  
              <p class="text-capitalize">
                Some quick example text to build on the card title and make up the
                bulk of the card's{" "}
                <a href="" class="text-white ">
                  <b>content.</b>
                </a>
              </p>
              <a href="" class="text-white ">
                <h5 class="text-capitalize text-white">
                  <b>download</b>
                </h5>
              </a>
            </div>
            <div class="col-md-1"></div>
          </div>
          <div class="row mt-4">
            <div class="col-md-1"></div>
            <div class="col">
              <p class="text-capitalize">
                copyright &copy; 2018 affilated html templates
              </p>
            </div>
            <div class="col">
              <p class="text-capitalize">
                <b>affitatad templates</b> -design and code by bootstrap.com
              </p>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </>
    );
  }
  