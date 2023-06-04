import React from "react";
import { useLocation, useEffect } from "react-router-dom";

function Home() {
  const location = useLocation();
  const data = location.state;
  // useEffect(() => {
  //   if (data) {
  //     setUsername(data.username);
  //     setPassword(data.password);
  //   }
  // }, [data]);
  return <div>Home {data}</div>;
}

export default Home;
