// Hook meant to be used to retrieve user based on react-router-dom params
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../components/UserState/userContext";
import userService from "../services/users";
import postService from "../services/post";


export default function useUser () {
    const { id } = useParams();
    const { user: authUser, update } = useContext(UserContext);
    const [ user, setUser ] = useState(null);
    const [ isCurrentUser, setIsCurrentUser ] = useState(false);
    const [ updatedUser, setUpdatedUser ] = useState(user);
    const [ edit, setEdit ] = useState(false);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            console.log("Fetching user for " + user?.email);
            try {
                const response = await userService.getUser(id);
                setUser(response.data);
                setUpdatedUser(response.data);
            } catch (e) {
                setUser(null);
            }
        };
        setUser(null);
        fetchUser();
    }, [id, authUser]);

    useEffect(() => {
        const fetchPosts = async () => {
            console.log("Fetching posts for " + user?.email);
            try {
                const posts = await postService.makeQuery().filter("user", user.id).exec();
                console.log("RECEIVED POSTS");
                setPosts(posts);
            } catch (e) {
                setPosts([]);
            }
        }
        setPosts([]);
        fetchPosts();
    }, [user]);

    // set state if edit is possible
    useEffect(() => {
        if (authUser && user && authUser?.id === user?.id) {
            setIsCurrentUser(true);
        }
    }, [authUser, user]);

    return { authUser, update, user, setUser, isCurrentUser, updatedUser, setUpdatedUser, edit, setEdit, posts, setPosts };
};
