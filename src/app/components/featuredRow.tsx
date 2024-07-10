"use client"
import { useState } from "react";
import style from "./featuredRow.module.css"

export default function FeaturedRow({children, text, timeConstrains}
    : {children?: React.ReactNode, text: string, timeConstrains?: Array<string>}) {


    function buttons(){  
        if(timeConstrains == undefined)
            return;
        else{
            const [timeRange, setTime] = useState(timeConstrains[0]);

            let buttonGroup = new Array();         
            for(let i = 0; i < timeConstrains.length; i++){
                buttonGroup.push(<button className={`btn ${style.timeButton} ${timeConstrains[i] == timeRange ? style.selected : ""}`} onClick={() => setTime(timeConstrains[i])}>{timeConstrains[i]}</button>);
            }
            return buttonGroup;
        }
    }

    return(
        <div>
            <div className="h3">
                <span className="me-4">{text}</span>
                <div className="btn-group">
                    {buttons()}
                </div>
            </div>
            <div className={`row gx-2 justify-content-md-start overflow-x-scroll flex-nowrap pb-4 ${style.page}`}>
                {children}
            </div>
        </div>
    )
}