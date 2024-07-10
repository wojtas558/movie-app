import MovieCard from "./components/movieCard"
import FeaturedRow from "./components/featuredRow"

export default function Page() {
    return (
    <div className="container-fluid py-2">
        <FeaturedRow text="Trending" timeConstrains={["Today", "This week"]}>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true} rating={92}/>
            <MovieCard title="The Boys" imageSrc="/poster1.jpg" rating={83}></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true} rating={92}></MovieCard>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true} rating={92}></MovieCard>
            <MovieCard title="The Boys" imageSrc="/poster1.jpg" rating={83}></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true} rating={92}></MovieCard>
            <MovieCard title="The Boys" imageSrc="/poster1.jpg" rating={83}></MovieCard>
        </FeaturedRow>
        <hr className="my-5"/>
        <FeaturedRow text="Trending" timeConstrains={["This week", "This month", "This year"]}>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true} rating={92}/>
            <MovieCard title="The Boys" imageSrc="/poster1.jpg" rating={83}></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true} rating={92}></MovieCard>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true}></MovieCard>
            <MovieCard title="The Boys" imageSrc="/poster1.jpg" rating={83}></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard title="Interstellar" imageSrc="/poster.jpg" isMovie={true} rating={92}></MovieCard>
            <MovieCard title="The Boys" imageSrc="/poster1.jpg" rating={83}></MovieCard>
        </FeaturedRow>
    </div>
    )
}