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
        <div class="card mb-3 align-center" style={{ maxWidth: "80%", Align: "center",marginLeft:"150px"}}>
          <div class="row">
            <div style={{ width: "20rem" }}>
              <img src={data.avatar} class="card-img-top" alt="..." />
            </div>
            <div class="col-md-12">
              <div class="card-body">
                <h3 class="card-title mb-3"><strong>Details</strong></h3>
                <h5 class="card-text"><strong>Name:-&nbsp;</strong>Name:-&nbsp;{data.name}</h5>
                <div class="col-md-12">

                  <div>
                    <h3 class="card-title mb-3 mt-4"><strong>Qualification</strong></h3>
                    <p class="card-text fs-5">This is a wider card with <strong>{data.qualification}</strong> text below as a natural lead-in to <strong>{data.qualification}</strong> content. This content is a little bit longer.</p>

                    <div class="col-md-12">

                      <div>
                        <h3 class="card-title mb-3 mt-4"><strong>Role</strong></h3>
                        <p class="card-text fs-5">This is a <strong>{data.job}</strong> card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                      </div>
                      <div>
                        <h3 class="card-title mb-3 mt-4"><strong>Address</strong></h3>
                        <h5 class="card-text"><strong>City:</strong>&nbsp;&nbsp;{data.city} </h5>
                        <h5 class="card-text"><strong>Zip Code:</strong>&nbsp;&nbsp;{data.pin} </h5>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row text-center" >
          <div class="col-">
            <button
              type="button"
              style={{marginRight:"90px"}}
              class="btn btn-danger text-center fs-3"
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
              type="button"
              style={{marginRight:"90px"}}
              class="btn btn-danger text-center fs-3"
              onClick={() => {
                fetch(api + "/" + param.id)
                  .then((responce) => responce.json())
                  .then((responce) => {
                    navigate("../displaystu/edit/" + param.id);
                  });
              }}
            >
              Edit
            </button>
          </div>
        </div>



      </>
    </>
  );
}
