import axios from 'axios';

const instance = axios.create({
  baseURL: "meet-fido-pdx.herokuapp.com/api/v1",
  headers: { Authorization: localStorage.getItem("token") }
});

export default instance;