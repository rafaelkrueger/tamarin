import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Load from "../Gifs/load.gif";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Api from "../Api";

function Login() {
  const [loading, setLoading] = useState({
    visibility: "hidden",
    display: "none",
  });
  const [loginText, setloginText] = useState({
    visibility: "visible",
    display: "block",
  });

  const [user, setUser] = useState({
    email: " ",
    password: " ",
  });

  const navigate = useNavigate();
  const [userLogin, setuserLogin] = useState({
    user: "",
    password: "",
  });

  const [link, setLink] = useState("");

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="row" id="login-content">
          <div className="col" id="login-logo">
            <div id="logo-login-div">
              <h2 id="logo-login">LOGO</h2>
            </div>
          </div>
          <div className="col" id="login-input">
            <h2 id="tamarin-login">LOGIN</h2>
            <div>
              <div class="input-group mb-3" id="s">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  ID:
                </span>
                <input
                  onChange={(e) => {
                    setuserLogin({ ...userLogin, user: e.target.value });
                  }}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Senha:
                </span>
                <input
                  onChange={(e) => {
                    setuserLogin({ ...userLogin, password: e.target.value });
                  }}
                  type="password"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <button
                onClick={(e) => {
                  setloginText({
                    visibility: "hidden",
                    display: "none",
                  });

                  e.preventDefault();
                  setLoading({
                    visibility: "visible",
                    display: "block",
                  });

                  Api.post("https://tamarintec.herokuapp.com/get-user", {
                    email: userLogin.user,
                    password: userLogin.password,
                  })
                    .then((res) => {
                      if (res.data.length < 1) {
                        setloginText({
                          visibility: "visible",
                          display: "block",
                        });
                        setLoading({
                          visibility: "hidden",
                          display: "none",
                        });
                        window.alert("Usuario Invalido");
                      } else {
                        navigate(`/admin/` + res.data[0]._id);
                      }
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                }}
                className="btn btn-large btn-secondary"
              >
                <h5
                  style={{
                    visibility: loginText.visibility,
                    display: loginText.display,
                  }}
                >
                  Login
                </h5>
                <img
                  src={Load}
                  style={{
                    width: "10%",
                    height: "10%",
                    marginLeft: "43%",
                    visibility: loading.visibility,
                    display: loading.display,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
