import axios from "axios";
import { BASE_URL } from "../utils/config";


async function getAllUsers() {
    const res = await axios.get(`${BASE_URL}/api/users`);
    return res;
};

async function getUser(id) {
    const res = await axios.get(`${BASE_URL}/api/users/${id}`);
    return res;
};

export default {
    getAllUsers, getUser
};
