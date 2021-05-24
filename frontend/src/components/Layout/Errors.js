import React, { useContext } from 'react'
import UserContext from "../UserState/userContext";
import PostContext from "../PostState/postContext";

const Errors = () => {
    const { error: userError } = useContext(UserContext);
    const { error: postError } = useContext(PostContext);
    return (
        <div className="d-flex justify-content-center align-self-center">
        { userError && 
            <div class="d-inline-block alert alert-danger mt-2 mb-0 mx-auto">{userError}</div>
        }
        { postError &&
            <div class="d-inline-block alert alert-danger mt-2 mb-0 mx-auto">{postError}</div>
        }
        </div>
    );
};

export default Errors;
