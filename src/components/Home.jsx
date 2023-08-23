import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
import { Button, Input, Row, Card, Col } from "antd";

const Home = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div
        style={{
          maxWidth: "700px",
          margin: " 5% auto",
          color: "white",
          textAlign: "start",
        }}
      >
        <Row style={{ fontSize: "30px", fontWeight: "700" }}>Hello User</Row>
        <Row style={{ marginTop: "20px", fontSize: "18px" }}>
          How are you doing today? Would you like to share something with the
          community 🤗
        </Row>

        <Card
          style={{
            background: "rgba(39,41,45,1)",
            marginTop: "40px",
          }}
        >
          <Row style={{ fontSize: "22px", fontWeight: "500", color: "white" }}>
            Create Post
          </Row>
          <Card style={{ border: "none", background: "black" }}>
            <Row
              style={{
                display: "flex",
              }}
            >
              <Col
                style={{
                  width: "10%",
                  height: "50px",
                  borderRadius: "50%",
                  background: "rgba(39,41,45,1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0px",
                }}
              >
                <p style={{ fontSize: "25px", color: "white" }}>
                  <BsFillChatDotsFill />
                </p>
              </Col>
              <Col span="20" style={{ color: "gray" }}>
                <Input
                  name=""
                  id=""
                  // placeholder="How are you feeling today?"
                  rows="2"
                  style={{
                    background: "transparent",
                    width: "100%",
                    border: "none",
                    padding: "10px 0px 0 20px",
                    color: "white",
                  }}
                ></Input>
              </Col>
            </Row>
          </Card>
          <br />
          <div style={{ display: "flex", justifyContent: "end", width: "98%" }}>
            <Button
              style={{
                padding: "7px 20px",
                color: "white",
                background: "#4A96FF",
                cursor: "pointer",
                border: "none",
                borderRadius: "3px",
              }}
            >
              Post
            </Button>
          </div>
        </Card>
        <br />
        <Card
          style={{
            maxWidth: "100%",
            height: "100%",
            borderRadius: "10px",
            background: "rgba(39,41,45,1)",
            border: "2px solid #939393",
            padding: "10px 20px",
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <FaUserCircle style={{ fontSize: "35px" }} />
              <div>
                <p>Lokesh Nimje</p>
                <p style={{ color: "gray" }}>5 min ago</p>
              </div>
            </div>
            <FiMoreHorizontal style={{ cursor: "pointer" }} />
          </Row>
          <br />

          <Card>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col
                style={{
                  width: "10%",
                  height: "50px",
                  borderRadius: "50%",
                  background: "rgba(39,41,45,1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0px",
                }}
              >
                <p style={{ fontSize: "25px" }}>👋</p>
              </Col>
              <Col style={{ color: "gray", width: "88%" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Col>
            </Row>
          </Card>
          <Row
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "start",
              width: "98%",
              cursor: "pointer",
              color: "white",
              marginTop: "20px",
            }}
          >
            <Col>
              <span style={{ fontSize: "22px" }}>
                <BiMessage />{" "}
              </span>{" "}
            </Col>
            <Col>24 comments</Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default Home;
