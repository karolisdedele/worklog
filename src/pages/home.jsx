import Header from '../components/header'
import pageTitle from '../hooks/pageTitle'

export default function Home() {
    pageTitle("Home");
    return(
        <>
            <Header/>
            <h2>Home page</h2>
        </>
    )
}