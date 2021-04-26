import React, { useContext } from "react";
import Job from "../Layout/Job";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import PostContext from "../PostState/postContext";
import UserContext from "../UserState/userContext";
import Spinner from "../Layout/Spinner";

import { BASE_URL } from "../../utils/config";
import { Link } from "react-router-dom";



const Home = () => {
  const postContext = useContext(PostContext);
  const userContext = useContext(UserContext);
  const { posts, filteredPosts } = postContext;
  const { isAuthenticated } = userContext;

  //const renderJobs = () =>{
    // return posts ? <Spinner /> : undefined;
  //};



  return (
    <div className="container d-flex flex-column mx-auto">
      {posts.map((post) => {
        //console.log(post);
        return (
          <Job
            key={post.id}
            id={post.id}
            className="mx-auto w-50"
            title={post.title}
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
        {isAuthenticated ? (
          <Fab
            mainButtonStyles={{ backgroundColor: "#007bff" }}
            alwaysShowTitle={true}
            icon={"+"}
            onClick={() => console.log("button")}
          ></Fab>
        ) : (
          <React.Fragment />
        )}
      </Link>
    </div>
  );
};

export default Home;
