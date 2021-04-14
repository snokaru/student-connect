import { BASE_URL } from "../utils/config";
import axios from "axios";

const updateToken = async (token) => {
    if (token == null) {
        console.log("REMOVING TOKEN")
    }
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
        localStorage.setItem("token", token);
    } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
    }
};

const login = async (formData) => {
    const res = await axios.post(`${BASE_URL}/api/login`, formData);
    updateToken(res.data.token);
    return res.data.token;
};

const logout = async () => {
    updateToken();
};

const register = async (formData) => {
    const res = await axios.post(`${BASE_URL}/api/users`, formData);
    updateToken(res.data.token);
    return res.data.token;
};

const update = async (formData) => {
    const res = await axios.put(`${BASE_URL}/api/login`, formData);
    return res.data;
};

const load = async () => {
    const res = await axios.get(`${BASE_URL}/api/login`);
    return res.data;
};

export default {
    updateToken, login, logout, register, update, load
};