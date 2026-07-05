import { useState, useEffect } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0); // closure
  const [tags, setTages] = useState(["react", "javascript", "html", "css"]);

  console.log("LikeButton rendered");

  useEffect(() => {
    console.log("useEffect called");
  }, [likes, tags]);


  useEffect(() => {
    const t = setTimeout(() => {
      console.log("useEffect called after 1000ms");
    }, 2000);

    return () => clearInterval(t);
  });

  return (
    <>
    <button onClick={() => setLikes(likes + 1)}>Like</button>
      <input onChange={(e) => {
        setTages([e.target.value, ...tags]);
        console.log(e.target.value);
    }} placeholder="Enter the tag" />

    {tags.map((tag, index) => {
        return <h1 key={index}>{tag}</h1>
    })}
    </>
  );
};

export default LikeButton;
