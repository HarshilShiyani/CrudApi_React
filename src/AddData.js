import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddData() {
  const navigate = useNavigate();
  const api = "https://631315afb466aa9b039296d3.mockapi.io/harshil";
  const [data, setData] = useState({});
  return (
    <>
      <form class="text-center">
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label" required>
            Name:
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
          <label for="text" class="col-sm-2 col-form-label">
            Select-Image:
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
          <label for="staticEmail" class="col-sm-2 col-form-label">
            salary:
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
          <label for="text" class="col-sm-2 col-form-label">
            Status:
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
          class="btn btn-primary"
          value="Add Faculty"
          onClick={() => {
            fetch(api, {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            }).then((res) => {
              navigate("/displaystu");
            });
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
