import React, { useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiMessage, BiLogOutCircle } from "react-icons/bi";
import { Button, Input, Row, Card, Col, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";


const data = [
  {
    userName: "Lokesh Nimje",
    post: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    time: "Tue Aug 23 2023 14:27:20 GMT+0530",
  },
  {
    userName: "Mahesh Kumar",
    post: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 2,
    time: "Wed Aug 23 2023 12:27:20 GMT+0530",
  },
];
const uName = localStorage.getItem("userName");

const Home = () => {
  const [postArray, setPostArray] = useState(data);
  const [inputPost, setInputPost] = useState("");

  const navigation = useNavigate();

  const handleInputChange = (e) => {
    setInputPost(e.target.value);
  };
  const handleAddPost = () => {
    const payload = {
      userName: uName,
      post: inputPost,
      comments: 0,
      time: new Date(),
    };
    setPostArray([...postArray, payload]);
    setInputPost("");
  };
  const handleLogout = () => {
    navigation('/')
  }
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div
        style={{
          maxWidth: "700px",
          margin: " 5% auto",
          color: "#C6C7CA",
          textAlign: "start",
        }}
      >
        <Row style={{ justifyContent: "space-between"}}>
          <Col style={{ fontSize: "30px", fontWeight: "700" }}>Hello {uName}</Col>
          <Col>
          <BiLogOutCircle 
          style={{ fontSize: "20px", cursor: "pointer"}}
          onClick={() => handleLogout()}
          />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px", fontSize: "18px" }}>
          How are you doing today? Would you like to share something with the
          community 🤗
        </Row>

        <Card
          style={{
            background: "#26292D",
            marginTop: "40px",
            border: "2px solid #36373B",
          }}
        >
          <Row
            style={{ fontSize: "18px", fontWeight: "500", color: "#C6C7CA" }}
          >
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
                  value={inputPost}
                  placeholder="How are you feeling today?"
                  onChange={(e) => handleInputChange(e)}
                  rows="2"
                  style={{
                    background: "transparent",
                    width: "100%",
                    border: "none",
                    padding: "10px 0px 0 20px",
                    color: "#C6C7CA",
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
              onClick={() => handleAddPost()}
            >
              Post
            </Button>
          </div>
        </Card>
        <br />
        {postArray &&
          postArray.toReversed().map((el) => {
            return (
              <Card
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  background: "#26292D",
                  border: "2px solid #36373B",
                  marginTop: "15px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#C6C7CA",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <FaUserCircle style={{ fontSize: "35px" }} />
                    <div>
                      <p>{el.userName}</p>
                      <p style={{ color: "gray" }}>
                        {moment(el.time).fromNow()}
                      </p>
                    </div>
                  </div>
                  <FiMoreHorizontal style={{ cursor: "pointer" }} />
                </Row>
                <br />

                <Card style={{ background: "black", border: "none" }}>
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
                    <Col style={{ color: "gray", width: "88%" }}>{el.post}</Col>
                  </Row>
                </Card>
                <Row
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "start",
                    width: "98%",
                    cursor: "pointer",
                    color: "#C6C7CA",
                    marginTop: "20px",
                  }}
                >
                  <Col>
                    <span style={{ fontSize: "22px" }}>
                      <BiMessage />{" "}
                    </span>{" "}
                  </Col>
                  <Col>{el.comments} comments</Col>
                </Row>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
