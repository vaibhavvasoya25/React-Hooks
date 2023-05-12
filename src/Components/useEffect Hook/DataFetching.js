import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromClick, setIdFromClick] = useState(1);

  function handleClick() {
    setIdFromClick(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromClick]);
  return (
    <div>
      <h1>Data Fetching</h1>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Data</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetching;
