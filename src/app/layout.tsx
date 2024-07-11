import {Metadata} from "next";
import Script from "next/script";
import Image from "next/image"
import Link from "next/link";
import SearchBar from "./components/searchBar"
import 'bootstrap/dist/css/bootstrap.css'
import "./variables.css"
import "./global.css"

export const metadata: Metadata = {
    title: "Movie App",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <html lang="pl">
        <body>
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous" />
            <nav className={`nav navbar navbar-dark navbar-expand-md sticky-top`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src={"/favicon.png"} alt="Home icon" width={32} height={32}></Image>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/library">Library</Link>
                        </li>
                    </ul>
                    <SearchBar></SearchBar>
                </div>
            </div>
            </nav>
            <main className="container-fluid">{children}</main>
        </body>
    </html>
)
}