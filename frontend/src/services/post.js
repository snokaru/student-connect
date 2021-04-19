import QueryBuilder from "./queryBuilder";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const BASE_RESOURCE_ROUTE = "/api/posts";

class PostQueryBuilder extends QueryBuilder {
  constructor() {
    super(BASE_RESOURCE_ROUTE);
    return this;
  }
}

const makeQuery = () => {
  return new PostQueryBuilder();
};

const createPost = async (formData) => {
  const res = await axios.post(`${BASE_URL}${BASE_RESOURCE_ROUTE}`, formData);
  return res.data;
};

export default {
  makeQuery,
  createPost,
};
