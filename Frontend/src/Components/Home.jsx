import React from "react";
import { Image, Box, Text, Button } from "@chakra-ui/react";
import "../Styles/Home.css";
import newImage from "../Images/soft.png";

const Home = () => {
  return (
    <div>
      <Box className="mainBoxHome">
        <Box className="mainHome">
          <Box>
            <h1 className="mainText">
              Its is Good to Stand
              <br /> on top of competition
            </h1>
            <br />

            <p
              style={{
                color: "rgba(134 136 148)",
                fontWeight: "700",
                fontSize: "24px",
                fontFamily: "poppin",
                letterSpacing: "1.5px",
              }}
            >
              With top notch user experience
              <br />
              and robust architure
            </p>
            <br />
            <Button
              style={{
                padding: "15px 30px",
                backgroundColor: "#33e2a0",
                color: "#FFFFFF",
                borderRadius: "40px",
              }}
              hover={{ backgroundColor: "#1b0e3d" }}
              className="btn"
            >
              Book A Call
            </Button>
          </Box>
          <Box className="flex_box_right">
            <Image
              style={{ borderRadius: "10px" }}
              src={newImage}
              className="image"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
