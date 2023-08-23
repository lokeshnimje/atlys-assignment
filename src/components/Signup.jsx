import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Button, Input, Row, Card } from "antd";

const Signup = ({ setLogSign }) => {
  return (
    // <Card
    //   style={{
    //     width: "470px",
    //     borderRadius: "10px",
    //     background: "rgba(39,41,45,1)",
    //     border: "2px solid #939393",
    //   }}
    // >
    <>
      <Row
        style={{
          justifyContent: "center",
          color: "#939393",
          fontSize: "14px",
        }}
      >
        SIGN UP
      </Row>
      <Row
        style={{
          justifyContent: "center",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "500 ",
        }}
      >
        Create an account to continue
      </Row>
      <Row style={{ display: "grid", textAlign: "start", padding: "10px" }}>
        <br />
        <label htmlFor="" style={{ color: "#939393" }}>
          Email
        </label>
        <Input
          type="text"
          style={{
            background: "transparent",
            padding: "10px",
            borderRadius: "5px",
            border: "0.5px solid #939393",
            color: "#939393",
            margin: "5px 0",
          }}
        />
        <br />
        <label htmlFor="" style={{ color: "#939393" }}>
          Username
        </label>
        <Input
          type="text"
          style={{
            background: "transparent",
            padding: "10px",
            borderRadius: "5px",
            border: "0.5px solid #939393",
            color: "#939393",
            margin: "5px 0",
          }}
        />
        <br />
        <label htmlFor="" style={{ color: "#939393" }}>
          Password
        </label>
        <Input
          type="text"
          style={{
            background: "transparent",
            padding: "10px",
            borderRadius: "5px",
            border: "0.5px solid #939393",
            color: "#939393",
            margin: "5px 0",
          }}
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
        >
          Continue
        </Button>
        <Row style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p style={{ color: "#939393" }}>Already have an account ?</p>
          <Row
            style={{
              display: "flex",
              gap: "2px",
              cursor: "pointer",
              alignItems: "center",
            }}
            onClick={() => setLogSign(true)}
          >
            <p style={{ color: "#ffffff" }}>Login </p>
            <p style={{ color: "#ffffff", margin: "3px 0 0 0" }}>
              <BsArrowRightShort />
            </p>
          </Row>
        </Row>
      </Row>
      <br />
      </>
    // </Card>
  );
};

export default Signup;
