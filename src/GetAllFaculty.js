import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetAllFaculty() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    const api = "https://631315afb466aa9b039296d3.mockapi.io/harshil";
    fetch(api)
      .then((responce) => responce.json())
      .then((responce) => setData(responce));
  });
  return (
    <>
      <div
        class="row student pt-5"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        {data.map((i) => (
          <div class="col-md-3 col-sm-6 col-xm-12 text-center">
            <div
              class="card d-shadow-v1--hover"
              onClick={() => {
                navigate("/displayfacu/" + i.id);
              }}
            >
              <img class="card-img-top" src={i.avatar} alt="imgload" />
              <div class="card-body">
                <h6 class="card-title">{i.name}</h6>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
}
