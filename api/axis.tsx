import axios from "axios";

const bigApi = axios.create({
  baseURL: "https://api.bigcommerce.com/stores/s9ye4xe3x0/v3",
  headers: {
    "X-Auth-Token": "wo9e40w72wf7f21kpz3xfgfiwmeffz"
  },
});

export default bigApi;
