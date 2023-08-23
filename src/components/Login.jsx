import React, { useState } from "react";
import { BsArrowRightShort, FaBeer } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button, Input, Row, Card, message } from "antd";
import Signup from "./Signup";
const Login = () => {
  const [logSign, setLogSign] = useState(true);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigation = useNavigate();

  const uName = localStorage.getItem("userName");
  const pass = localStorage.getItem("password");
  const mail = localStorage.getItem("email");

  const handleLogin = () => {
    if (userName == "" || password == "") {
      message.error("Please fill all the fields", 2);
      return;
    }
    if ((uName == userName || mail == userName) && pass == password) {
      navigation("/home");
    } else {
      message.error("User doesnot exist, Please Register!", 2);
    }
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        margin: "auto",
        background: "transparent",
        padding: "20px",
        height: "100vh",
      }}
    >
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15vh",
        }}
      >
        <img src={require("./image/Logo.png")} alt="" />
      </Row>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {logSign ? (
          <Card
            style={{
              width: "470px",
              borderRadius: "10px",
              background: "rgba(39,41,45,1)",
              border: "2px solid #939393",
            }}
          >
            <Row
              style={{
                justifyContent: "center",
                color: "#939393",
                fontSize: "14px",
              }}
            >
              WELCOME BACK
            </Row>
            <Row
              style={{
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Log into your account
            </Row>
            <Row
              style={{ display: "grid", textAlign: "start", padding: "10px" }}
            >
              <br />
              <label htmlFor="" style={{ color: "#939393" }}>
                Email or Username
              </label>
              <Input
                type="text"
                placeholder="Enter your email or username"
                style={{
                  background: "transparent",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "0.5px solid #939393",
                  color: "#939393",
                  margin: "5px 0",
                }}
                onChange={(e) => setUserName(e.target.value)}
              />
              <br />
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Row>
                  <label htmlFor="" style={{ color: "#939393" }}>
                    Password
                  </label>
                </Row>
                <Row>
                  <label
                    htmlFor=""
                    style={{ color: "#939393", cursor: "pointer" }}
                  >
                    Forgot Password?
                  </label>
                </Row>
              </Row>
              <Input
                type="text"
                placeholder="Enter your Password"
                style={{
                  background: "transparent",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "0.5px solid #939393",
                  color: "#939393",
                  margin: "5px 0",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                style={{
                  justifyContent: "center",
                  borderRadius: "5px",
                  margin: "20px 0",
                  background: "#4A96FF",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                }}
                // onClick={() => navigation("/home")}
                onClick={() => handleLogin()}
              >
                Login now
              </Button>
              <Row
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p style={{ color: "#939393" }}>Not registere yet ?</p>
                <Row
                  style={{
                    display: "flex",
                    gap: "2px",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                  onClick={() => setLogSign(false)}
                >
                  <p style={{ color: "#ffffff" }}>Register </p>
                  <p style={{ color: "#ffffff", margin: "10px 0 0 0" }}>
                    <BsArrowRightShort />
                  </p>
                </Row>
              </Row>
            </Row>
          </Card>
        ) : (
          <Signup setLogSign={setLogSign} />
        )}
      </Row>
    </div>
  );
};

export default Login;
