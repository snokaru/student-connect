import React, { useContext, useEffect, useState } from "react";
import Job from "../Layout/Job";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import PostContext from "../PostState/postContext";
import postService from "../../services/post";
import { BASE_URL } from "../../utils/config";
import { Link } from "react-router-dom";
const Home = () => {
  const postContext = useContext(PostContext);
  const { posts, filteredPosts } = postContext;
  /*let [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        console.log("waiting for posts...");
        const receivedPosts = await postService.makeQuery().exec();
        console.log("received posts");
        //console.log(receivedPosts);
        setPosts(receivedPosts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);*/
  return (
    <div className="container d-flex flex-column mx-auto">
      {posts.map((post) => {
        //console.log(post);
        return (
          <Job
            key={post.id}
            className="mx-auto w-50"
            name={post.title}
            company={post.user.name}
            when={post.createdAt}
            companyPicture={`${BASE_URL}/${post.user.profilePicture}`}
            description={post.description}
            type={post.workHours}
            location={post.workPlace}
            user={post.user}
          />
        );
      })}
      <Link to="/createpost">
        <Fab
          mainButtonStyles={{ backgroundColor: "#007bff" }}
          alwaysShowTitle={true}
          icon={"+"}
          onClick={() => console.log("button")}
        ></Fab>
      </Link>
    </div>
  );
};

export default Home;
