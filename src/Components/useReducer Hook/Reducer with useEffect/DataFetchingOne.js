import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("oh! Something went wrong");
      });
  });
  return (
    <h1>
      {loading ? "Loading..." : post.title}
      <i>{error ? error : null}</i>
    </h1>
  );
};

export default DataFetchingOne;
