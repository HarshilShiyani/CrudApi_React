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
    <>
      <input
        type="text"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />

      <input
        value={data.avatar}
        type="text"
        onChange={(e) => {
          setData({ ...data, avatar: e.target.value });
        }}
      />

      <input
        value={data.salary}
        type="number"
        onChange={(e) => {
          setData({ ...data, salary: e.target.value });
        }}
      />

      <input
        value={data.job}
        type="text"
        onChange={(e) => {
          setData({ ...data, job: e.target.value });
        }}
      />

      <input
        type="button"
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
      />
    </>
  );
}
