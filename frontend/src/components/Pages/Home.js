import React, { useContext, useEffect, useState } from "react";
import Job from "../Layout/Job";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import PostContext from "../PostState/postContext";
import postService from "../../services/post";
import { BASE_URL } from "../../utils/config";

const Home = () => {
  const postContext = useContext(PostContext);
  //const { posts, filteredPosts } = postContext;
  let [posts, setPosts] = useState([]);
  useEffect(() => { 
      const fetchData = async () => {
        const receivedPosts = await postService.exec();
        console.log(receivedPosts);
        setPosts(receivedPosts);
      }
      fetchData();
  }, []);
  return (
    <div className="container d-flex flex-column mx-auto">
      {
        posts.map((post) => {
          console.log(post)
          return <Job name={post.title} company={post.user.name} when={post.createdAt}
            companyPicture={`${BASE_URL}/${post.user.profilePicture}`}
            description={post.description}
            type={post.workHours} 
            location={post.workPlace}
            />
        })
      }
      <Fab
        mainButtonStyles={{ backgroundColor: "#007bff" }}
        alwaysShowTitle={true}
        icon={"+"}
        onClick={() => console.log("button")}
      ></Fab>
    </div>
  );
};

export default Home;
