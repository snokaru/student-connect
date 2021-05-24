import React, { useContext } from "react";
import Job from "../Layout/Job";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import PostContext from "../PostState/postContext";
import UserContext from "../UserState/userContext";
import Footer from "../Layout/Footer";
import classes from "../Layout/footer.module.css";
import CurrentFilters from "../Layout/CurrentFilters";
import { BASE_URL } from "../../utils/config";
import { Link } from "react-router-dom";
import SearchBar from "../Layout/SearchBar";
const Home = () => {
  const postContext = useContext(PostContext);
  const userContext = useContext(UserContext);
  const { posts, filteredPosts } = postContext;
  const { isAuthenticated } = userContext;

  return (
    <div className={classes.body}>
      <div className="container">
        <SearchBar />

        <CurrentFilters />
        {posts.map((post) => {
          //console.log(post);
          return (
            <Job
              key={post.id}
              id={post.id}
              className="mx-auto col-6"
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
      <div className={classes.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
