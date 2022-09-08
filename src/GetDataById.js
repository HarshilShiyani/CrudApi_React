import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function GetDataById() {
  const navigate = useNavigate();
  const param = useParams();

  const [data, setData] = useState({});
  const api = "https://631315afb466aa9b039296d3.mockapi.io/harshil";

  useEffect(() => {
    fetch(api + "/" + param.id)
      .then((responce) => responce.json())
      .then((responce) => setData(responce));
  });

  return (
    <>
      <>
        <h2>{data.name}</h2>
        <img alt="img loaging" src={data.avatar} />
        <h4>{data.salary}</h4>
        <h4>{data.job}</h4>

        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            fetch(api + "/" + param.id, { method: "DELETE" })
              .then((responce) => responce.json())
              .then((responce) => {
                navigate("../displaystu");
              });
          }}
        >
          Delete
        </button>

        <button
          onClick={() => {
            fetch(api + "/" + param.id)
              .then((responce) => responce.json())
              .then((responce) => {
                navigate("../display/edit/" + param.id);
              });
          }}
        >
          Edit
        </button>
      </>
    </>
  );
}
