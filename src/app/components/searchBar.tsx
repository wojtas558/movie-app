"use client"
import { FormEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import style from "./searchBar.module.css"

export default function SearchBar(){

const [searchType, setSearchType] = useState("All");
const [paramVal, setParamVal] = useState("All");
const router = useRouter();
// const pathname = usePathname();
const params = new URLSearchParams(useSearchParams());

const search = async (event: FormEvent) => {
    event.preventDefault();
    
    params.set("param", paramVal);
    router.push(`/search/?${params.toString()}`);
}

return(
    <form className="d-flex ms-auto" role="search" onSubmit={search}>
        <div className="dropdown">
            <button className={`${style.type} ${style.button} btn dropdown-toggle`} type="button" data-bs-toggle="dropdown">{searchType}</button>
            <ul className={`${style.selection} dropdown-menu`}>
                <li className={`${"All" == searchType ? style.selected : ""} dropdown-item`} onClick={() => setSearchType("All")}>All</li>
                <li className={`${"Movies" == searchType ? style.selected : ""} dropdown-item`} onClick={() => setSearchType("Movies")}>Movies</li>
                <li className={`${"TV Shows" == searchType ? style.selected : ""} dropdown-item`} onClick={() => setSearchType("TV Shows")}>TV Shows</li>
                <li className={`${"Actors" == searchType ? style.selected : ""} dropdown-item`} onClick={() => setSearchType("Actors")}>Actors</li>
            </ul>
        </div>
        <input name="parameter" className={`${style.searchBox} form-control me-2`} type="search" placeholder="Search" onChange={e => {setParamVal(e.currentTarget.value)}}/>
        <button className={`${style.searchButton} ${style.button} btn`} type="submit">Search</button>
    </form>
)
}