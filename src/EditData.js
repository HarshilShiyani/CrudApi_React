import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditData() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const param = useParams();
  const api = "https://631315afb466aa9b039296d3.mockapi.io/harshil";
  useEffect(() => {
    fetch(api + "/" + param.id, { method: "GET" })
      .then((responce) => responce.json())
      .then((responce) => setData(responce));
  }, []);

  return (
    <><form class="mt-5  ps-5 pe-0">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label fs-4" required>
          <strong>Name:</strong>
        </label>
        <div class="col-sm-6">
          <input
            type="text"
            value={data.name}
            class="form-control"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label fs-4">
          <strong>Select-Image:</strong>
        </label>
        <div class="col-sm-6">
          <input
            value={data.avatar}
            class="form-control"
            type="text"
            onChange={(e) => {
              setData({ ...data, avatar: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label fs-4">
          <strong>Salary:</strong>
        </label>
        <div class="col-sm-6">
          <input
            value={data.salary}
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
        <label class="col-sm-2 col-form-label fs-4">
          <strong>Status:</strong>
        </label>
        <div class="col-sm-6">
          <input
            value={data.job}
            type="text"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, job: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label fs-4">
          <strong>City:</strong>
        </label>
        <div class="col-sm-6">
          <input
            value={data.city}
            type="text"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, city: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label fs-4">
          <strong>Pin Code:</strong>
        </label>
        <div class="col-sm-6">
          <input
            value={data.pin}
            type="text"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, pin: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label fs-4">
          <strong>Qualification:</strong>
        </label>
        <div class="col-sm-6">
          <input
            value={data.qualification}
            type="text"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, qualification: e.target.value });
            }}
            required
          />
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary center fs-4"
        value="Edit Data"
        onClick={() => {
          fetch(api + "/" + param.id, {
            method: "PUT",

            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => {
            navigate("/displaystu");
          });
        }}
      >
        <strong>Confirm Edit</strong>
      </button>
    </form>
    </>
  );
}
