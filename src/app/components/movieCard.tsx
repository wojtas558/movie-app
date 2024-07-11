"use client"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import style from "./movieCard.module.css"


function getBookmarkType(iconType : boolean){
    if(!iconType) return "/bookmarkOutline.png"
    else return "/bookmarkFilled.png"
}
function getTypeIcon(iconType : boolean){
    if(!iconType) return "/seriesIcon.png"
    else return "/movieIcon.png"
}

export default function MovieCard({title = "Film title", imageSrc = "/posterPlaceholder.jpg", width = 2000, height= 3000, rating = 50, bookmark = false, isMovie = false} 
    : {title?: string, imageSrc?: string, width?: number, height?: number, rating?: number, bookmark?: boolean, isMovie?: boolean}){
        
    const [isBookmarked, setBookmark] = useState(bookmark);

    return (
    <Link href={""} className={`${style.movieCard} col-6 col-lg-3 col-xl-2 position-relative pt-2 p-1 pb-0 pb-md-2`}>
        <div className={`${style.bookmark} position-absolute`} onClick={() => setBookmark(!isBookmarked)}>
            <Image className="" 
            src={getBookmarkType(isBookmarked)} 
            width={50} height={50} alt={`Favourite icon for ${title}`}/>
        </div>
        <div style={{height: "80%"}}>
            <Image className="img-fluid h-100 p-1" src={imageSrc} width={width} height={height} alt={`Poster for ${title}`} />
        </div>
        <div className={`m-1`}>
            <div className="h4">{title}</div>
            <div className="float-start">
                <Image className="" 
                src={getTypeIcon(isMovie)} 
                width={24} height={24} alt={`Type icon for ${title}`}/>
            </div>
            <div className="float-end">{rating}%</div>
        </div>
    </Link>
    )
}