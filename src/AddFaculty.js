import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFaculty() {
  const navigate = useNavigate();
  const api = "https://631315afb466aa9b039296d3.mockapi.io/harshil";
  const [data, setData] = useState({});
  return (
    <>
    <div>
    <form class="mt-5  ps-5 pe-0">
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label fs-4" required>
            <strong>Name:</strong>
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="text" class="col-sm-2 col-form-label fs-4">
            <strong>Select-Image:</strong>
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setData({ ...data, avatar: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label fs-4">
          <strong>Salary:</strong>
          </label>
          <div class="col-sm-6">
            <input
              type="number"
              class="form-control"
              onChange={(e) => {
                setData({ ...data, salary: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="text" class="col-sm-2 col-form-label fs-4">
            <strong>Status:</strong>
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setData({ ...data, job: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary center fs-4"
          value="Add Faculty"
          onClick={() => {
            fetch(api, {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            }).then((res) => {
              navigate("/displayfacu");
            });
          }}
        >
          <strong>Submit</strong>
        </button>
      </form>

    </div>
      
      
    </>
  );
}
