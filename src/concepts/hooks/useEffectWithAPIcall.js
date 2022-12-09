import React, { useEffect, useState } from "react";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const User = ({ user }) => {
  return (
    <>
      {user?.name && (
        <section>
          <h1>Current User Deatils</h1>
          <hr></hr>
          <h5>Name: {user.name}</h5>
          <h5>Email: {user.email}</h5>
          <h5>Phone: {user.phone}</h5>
          <h5>Website: {user.website}</h5>
          <hr></hr>
        </section>
      )}
    </>
  );
};

const Post = ({ post }) => {
  return (
    <>
      {post?.length > 0 && (
        <>
          <h1>User Posts</h1>
          <hr></hr>
          <ul>
            {post.map(({ id, title, body }) => {
              return (
                <li key={id}>
                  <h5>Post Title: {title}</h5>
                  <p>Post Description: {body}</p>
                </li>
              );
            })}
          </ul>
          <hr></hr>
        </>
      )}
    </>
  );
};

function UseEffectWithAPIcall() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log(
      "1. Inside useEffect, it will be called at the time of mounting & multiple times on any state update"
    );
  });

  useEffect(() => {
    console.log(
      "2. Inside useEffect, it will be called only once at the time of mounting"
    );
  }, []);

  useEffect(() => {
    console.log(
      "3. Inside useEffect, it will be called at every new user state update"
    );
  }, [user]);

  useEffect(() => {
    console.log(
      "4. Inside useEffect, it will be called at every new post state update"
    );
  }, [post]);

  const getUser = () => {
    console.log("inside getUser");
    const userId = Math.floor(getRandomArbitrary(1, 10));

    //get the user
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
        setPost(null);
      });
  };

  const getUserPosts = () => {
    console.log("inside getUserPosts");
    // get the posts of the current user
    const userId = 1; //user.id;
    const id = Math.floor(getRandomArbitrary(1, 10));
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${id}`
    )
      .then((response) => response.json())
      .then((result) => setPost(result));
  };

  return (
    <>
      <User user={user}></User>
      <button onClick={getUser}>Get next user details</button>

      <Post post={post} />
      {user && user?.id !== undefined && (
        <button onClick={getUserPosts}>Get a new post of current User</button>
      )}
    </>
  );
}

export default UseEffectWithAPIcall;
