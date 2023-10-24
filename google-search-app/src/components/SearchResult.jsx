import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
    const [result, setresult] = useState()
    const { query, starIndex } = useParams()
    const { imageSearch } = useContext(Context)

    useEffect(() => {
        fetchSearchResults()
    },[query,starIndex,imageSearch])
    
    const fetchSearchResults = () => {
        let payload = { q: query, start: starIndex }
        if (imageSearch) {
           payload.searchType="image" 
        }
        fetchDataFromApi(payload).then((res) => {
            console.log(res);
            setresult(res)
        })
    }
    if (!result) return
    const { items, queries, SearchInformation} = result
    return (
        <div className="flex flex-col  min-h-[100vh]">
            <SearchResultHeader/>
            <main className="grow p-[12px] pb-0 md:pr-5  md:pl-20">
                <div></div>
            </main>

            <Footer/>
        </div>
    )
};

export default SearchResult;
