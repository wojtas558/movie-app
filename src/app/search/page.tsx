'use client'
import { useSearchParams } from 'next/navigation'
import { createElement, Suspense, useEffect, useState } from 'react';
import MovieCard from '../components/movieCard';

export default function Page() {
    const searchParams = useSearchParams()
    const search = searchParams.get('param')
    // const [data, setData] = useState();
    const [movieCards, setMovieCards] = useState([<div>e</div>, <div>a</div>]);
    
    useEffect(() => {
        console.log(search);

        const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${search}?exact=false&titleType=movie&limit=20`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8109669eedmsh7040365510e7bd1p1019f2jsn6c981d5eb7b6',
                'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        
        const fun = async () =>{
            const resp = await fetch(url, options);
            const resu = await resp.json();
            let temp = new Array;
            let params: {
                src: string | undefined;
                width: number | undefined;
                height: number | undefined;
            } = {
                src: undefined,
                width: undefined,
                height: undefined
            }

            console.log(resu)
            if(search){
                for(let i = 0; i < resu.entries; i++){
                    params.src = undefined;
                    if(resu.results[i].primaryImage){
                        params.src = resu.results[i].primaryImage.url;
                        params.width = resu.results[i].primaryImage.width
                        params.height = resu.results[i].primaryImage.height
                    }
                    temp.push(createElement(MovieCard, {
                        title: resu.results[i].titleText.text, 
                        imageSrc: params.src,
                        width: params.width, 
                        height: params.height
                    }));    
                }
                
                setMovieCards(temp);
            }
        }
        if(search){
            fun();
            
        }
        
    
    }, [search]);

    return (
    <Suspense>
        <h2 className='m-2'>Search: {search}</h2>
        <div className="row container-fluid gy-5 justify-content-center">{movieCards}</div>
    </Suspense>)
}