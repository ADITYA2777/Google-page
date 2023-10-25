import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const param = {
  key: "AIzaSyCy67crM4GmkdlTlp2jjryVh6vb1B7iqWY",
  cx: "d605dd76d1fd24663",
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...param, ...payload },
  });
  return data;
};
