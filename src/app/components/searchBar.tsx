"use client"
import { useState } from "react";
import style from "./searchBar.module.css"

export default function SearchBar(){

const [searchType, setSearchType] = useState("All");


return(
    <form className="d-flex ms-auto" role="search">
        <div className="dropdown">
            <button className={`${style.type} ${style.button} btn dropdown-toggle`} type="button" data-bs-toggle="dropdown">{searchType}</button>
            <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={() => setSearchType("All")}>All</li>
                <li className="dropdown-item" onClick={() => setSearchType("Movies")}>Movies</li>
                <li className="dropdown-item" onClick={() => setSearchType("TV Shows")}>TV Shows</li>
                <li className="dropdown-item" onClick={() => setSearchType("Actors")}>Actors</li>
            </ul>
        </div>
        <input className={`${style.searchBox} form-control me-2`} type="search" placeholder="Search"/>
        <button className={`${style.searchButton} ${style.button} btn`} type="submit">Search</button>
    </form>
)
}