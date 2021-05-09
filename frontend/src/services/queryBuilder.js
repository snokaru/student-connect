import axios from "axios";
import { BASE_URL } from "../utils/config";

/*
const query = new QueryBuilder().filter('email' 'abcd@gmail.com').filter(...).paginate().sort().exec()
*/

class QueryBuilder {
    constructor(resourceRoute) {
        this.baseUrl = `${BASE_URL}${resourceRoute}?`;
        return this;
    }

    filter(field, value) {
        this.baseUrl += `&${field}=${value}`;
        return this;
    }

    paginate(page, limit) {
        this.baseUrl += `&page=${page}&limit=${limit}`;
        return this;
    }

    sort(criteria, isAsc) {
        this.baseUrl += `&sort_by=${isAsc ? "" : "-"}${criteria}`;
        return this;
    }

    search(searchedValue) {
        this.baseUrl += `&fuzzy=${searchedValue}`;
        return this;
    }

    async exec() {
        
        const response = await axios.get(this.baseUrl);
        
        return response.data;
    }
}

export default QueryBuilder;