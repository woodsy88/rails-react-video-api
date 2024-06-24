import React, { useState, useEffect } from "react"
import { API_URL } from "../../constants"
export default function PostsList() {
   const [posts, setPosts] = useState([])
   const [ , setLoading ] = useState(true)
   const [ , setError ] = useState(null)

   useEffect(() => {
      async function loadPosts(){
        try {
          const response = await fetch(API_URL);
          console.log("response", response)
          if (response.ok) {
            const json = await response.json()
            console.log("json", json)
            setPosts(json)
          } else {
            throw response
          }
        } catch (e) {
          setError("an error occured")
          console.log("an error occurdd", e)
        } finally {
          setLoading(false)
        }
      }
      loadPosts()
   }, [])

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post, i) => {
        return (
          <div key={i} className="post-container">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>

  )
}