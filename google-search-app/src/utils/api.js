import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const param = {
  key: "AIzaSyC2cMos050SuaRqDnrN20iRZYw3arylby8",
  cx: "f021551cb54c3417b",
};
export const fetchDataFromApi = async(payload) => {
    const {data } = await axios.get(BASE_URL, {
        params:{ ...param, ...payload }
    })
    return data 
};
