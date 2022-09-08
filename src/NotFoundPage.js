import { Link } from "react-router-dom";
import "./NotFoundPage.css";
export default function PageNotFound() {
  return (
    <>
      <div class="page-not-found">
        <div class="bg-light shadow mt-5">
          <h2>404</h2>
          <h3 class="mt-4">Opps! Page Not Found</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and<br></br>
            typesetting industry.
          </p>
          <div class="mt-5">
            <Link to="home">
              <button type="button" class="btn btn-warning me-5 ">
                Back Home
              </button>
            </Link>

            <button type="button" class="btn  btn-success">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
