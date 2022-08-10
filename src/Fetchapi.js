import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from './Redux/Actions'

function Fetchapi() {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  return (
    <div>
      <button class="button" onClick={() => dispatch(fetchPosts())}> Fetch Api</button>
      {!loading ? (
        posts.map((post) => <h3 key={post.id}>{post.body}</h3>)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Fetchapi;