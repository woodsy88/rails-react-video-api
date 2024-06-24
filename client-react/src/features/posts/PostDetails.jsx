import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../constants';

function PostDetails() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    console.log("i rand")
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        console.log("single response", response)
        if (response.ok) {
          const json = await response.json()
          setPost(json)
        } else {
          throw response
        }
      } catch (e) {
        console.log("an error occurdd", e)
      } finally {
        setLoading(false)
      }
    }
    fetchCurrentPost()
  }, [id]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Post Details</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/" />
    </div>
  );
}

export default PostDetails;