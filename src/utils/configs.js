import axios from "axios";

const baseURL = 'https://test-school-1e904-default-rtdb.firebaseio.com/';

const instance = axios.create({baseURL})

export default instance