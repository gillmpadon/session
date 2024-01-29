import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("https://backend-4ak1.onrender.com/okayna")
      .then((result) => {
        console.log(result.data);
        setName(result.data.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>{name}</div>;
};

export default App;
