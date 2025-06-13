'use client'
import { useSearchParams } from 'next/navigation'
import { createElement, Suspense, useEffect, useState } from 'react';
import MovieCard from '../components/movieCard';

function SidePage() {
    const searchParams = useSearchParams()
    const search = searchParams.get('param')
    // const [data, setData] = useState();
    const [movieCards, setMovieCards] = useState([<></>]);
    
    useEffect(() => {
        console.log(search);

        const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${search}?exact=false&titleType=movie&limit=20`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY as string,
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
    <>
        <h2 className='m-2'>Search: {search}</h2>
        <div className="row container-fluid gy-5 justify-content-center">{movieCards}</div>
    </>)
}

export default function Page(){
    return (
        <Suspense>
            <SidePage></SidePage>
        </Suspense>
    )
}