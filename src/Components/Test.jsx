import { useEffect, useState } from "react";
const Test = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7188/api/Test");
        console.log("Response :", response);
        const data = await response.text();
        console.log(data);
        setText(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return <div>{text}</div>;
};

export default Test;
