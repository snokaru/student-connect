import axios from "axios";
import { BASE_URL } from "../utils/config";

const BASE_RESOURCE_ROUTE = "/api/comments";
const addComment = async (formData) => {
  const res = await axios.post(`${BASE_URL}${BASE_RESOURCE_ROUTE}`, formData);
  return res.data;
};
const deleteComment = async (id) => {
  await axios.delete(`${BASE_URL}${BASE_RESOURCE_ROUTE}/${id}`);
};
export default {
  addComment,
  deleteComment,
};
