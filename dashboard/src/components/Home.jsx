import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const API_URL = "http://localhost:3002";
const LOGIN_URL = "http://localhost:3001/login";

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/verify`, {
          withCredentials: true,
        });
        console.log("verify response:", data);

        if (data.status) {
          setIsVerified(true);
          setUsername(data.user);
        } else {
          window.location.href = LOGIN_URL;
        }
      } catch (error) {
        console.error("verify failed:", error);
        window.location.href = LOGIN_URL;
      }
    };

    verifyUser();
  }, []);

  // show nothing until the backend confirms the user is logged in
  if (!isVerified) return null;

  return (
    <>
      <TopBar username={username} />
      <Dashboard username={username}  />
    </>
  );
};

export default Home;